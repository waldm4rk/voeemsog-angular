import { Component, importProvidersFrom } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SeoService } from './services/seo.service';
import { HostListener } from '@angular/core';

import { filter } from 'rxjs/operators';

import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LangComponent } from "./lang/lang.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, FooterComponent, LangComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  showScrollButton: boolean = false;

  constructor(private router: Router,
    private seo: SeoService,
    private translate: TranslateService
  ) {
  translate.addLangs(['en', 'ru']);

  // Берём язык браузера
  const browserLang = translate.getBrowserLang() || 'en';
  translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');

  this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {

        const url = `https://voeemsog.com${event.urlAfterRedirects}`;

        this.seo.setCanonical(url);
      });
}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const y = window.scrollY || document.documentElement.scrollTop;
    this.showScrollButton = y > 400;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
