import { Component, ElementRef, ViewChild } from '@angular/core';
import { CookiesService } from 'app/cookies.service';
@Component({
  selector: 'app-lang',
  standalone: true,
  imports: [],
  templateUrl: './lang.component.html',
  styleUrl: './lang.component.scss',
})
export class LangComponent {
  @ViewChild('menu', { static: false }) menuRef!: ElementRef<HTMLDivElement>;
  @ViewChild('icon', { static: false }) iconRef!: ElementRef<HTMLElement>;
  constructor(private cookies: CookiesService) {}
  ngAfterViewInit(): void {
    document.addEventListener('click', this.handleClickOutside);
    this.handleIcon();
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleIcon(){
    const langs = document.getElementsByClassName('lang');
    for (let i = 0; i < langs.length; i++) {
      langs[i].innerHTML = langs[i].innerHTML.replace('✔ ', '');
    }
    const lang = this.cookies.returnLang();
    document.getElementById(lang)?.insertAdjacentHTML('afterbegin', '✔ ');
  }

  openMenu(): void {
    const menu = this.menuRef?.nativeElement;
    if (!menu) return;
    menu.classList.toggle('active');
  }

  handleClickOutside = (event: MouseEvent) => {
    const menu = this.menuRef?.nativeElement;
    const icon = this.iconRef?.nativeElement;

    if (!menu) return;
    if (!menu.classList.contains('active')) return;

    const target = event.target as Node;

    if (menu.contains(target)) return;

    if (icon && icon.contains(target)) return;

    menu.classList.remove('active');
  };

  setLang(lang: string): void {
    this.cookies.setLanguage(lang);
    this.handleIcon();
  }
}
