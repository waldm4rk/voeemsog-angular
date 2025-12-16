import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { CookiesService } from 'app/cookies.service';
import { routes } from 'app/app.routes';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  lastScrollTop = 0;
  headerTop = '0';
  isVisibleSearch = false;
  isBurgerOpen = false;
  @ViewChild('searchElement') 
  globalSearchElement: ElementRef<HTMLInputElement> | undefined;
  currentLangIndex = 0;
  langs = ['English', 'Русский'];
  cookieLang = ['en', 'ru'];
  currentLang = 'English';

  constructor(
    private router: Router,
    private cookies: CookiesService,
    private translate: TranslateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeAll();
    });
    const savedLang = this.cookies.returnLang();
    this.currentLangIndex = this.cookieLang.indexOf(savedLang);
    if (this.currentLangIndex === -1) this.currentLangIndex = 0;

    this.currentLang = this.langs[this.currentLangIndex];

    this.translate.use(this.cookieLang[this.currentLangIndex]);

    this.cookies.updateLang(); 
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop && currentScroll > 100) {
      this.headerTop = '-16vh';
    } else if (currentScroll <= 100) {
      this.headerTop = '0';
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  prevLang() {
    this.currentLangIndex = (this.currentLangIndex - 1 + this.langs.length) % this.langs.length;
    this.updateLanguage();
  }

  nextLang() {
    this.currentLangIndex = (this.currentLangIndex + 1) % this.langs.length;
    this.updateLanguage();
  }

  private updateLanguage() {
    this.currentLang = this.langs[this.currentLangIndex];
    const langCode = this.cookieLang[this.currentLangIndex];
    this.cookies.setLanguage(langCode);
    this.translate.use(langCode);
  }

  toggleSearch(event: Event) {
    event.stopPropagation();
    this.isVisibleSearch = !this.isVisibleSearch;
    this.isBurgerOpen = false;
  }
  toggleBurger() {
    this.isBurgerOpen = !this.isBurgerOpen;
    this.isVisibleSearch = false;
    document.body.style.overflow = this.isBurgerOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.isBurgerOpen = false;
    document.body.style.overflow = '';
  }

  closeAll() {
    this.isBurgerOpen = false;
    this.isVisibleSearch = false;
    document.body.style.overflow = '';
  }

  home() {
    if(this.cookies.returnLang() == 'ru'){
      this.router.navigate(['/ru']);
    }else if(this.cookies.returnLang() == 'en'){
      this.router.navigate(['/']);
    }else{
      this.router.navigate(['/']);
      this.cookies.setLanguage('en');
    }
  }

  redirect(endpoint: string) {
    this.router.navigate([endpoint]);
  }

  searchRooms() {
    const inputElement = document.querySelector('.searchBar input') as HTMLInputElement;
    const query = inputElement?.value.trim();
    if (query && query.length > 0) {
      if(window.location.href.includes("/rooms")){
        this.router.navigate(
          [],
          {
            relativeTo: this.route,
            queryParams: { s: query },
          }
        );
        this.toggleSearch(event!);
      }
      this.router.navigate(['/rooms'], {
        queryParams: { s: query }
      });
    }
  }
}