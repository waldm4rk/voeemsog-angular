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
  // навешиваем слушатель после инициализации вью
  ngAfterViewInit(): void {
    document.addEventListener('click', this.handleClickOutside);
    const lang = this.cookies.returnLang();
    const langs = document.getElementsByClassName('lang');
    for (let i = 0; i < langs.length; i++) {
      langs[i].innerHTML = langs[i].innerHTML.replace('✔ ', '');
    }
    document.getElementById(lang)?.insertAdjacentHTML('afterbegin', '✔ ');
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.handleClickOutside);
  }

  openMenu(): void {
    const menu = this.menuRef?.nativeElement;
    if (!menu) return;
    menu.classList.toggle('active');
  }

  handleClickOutside = (event: MouseEvent) => {
    const menu = this.menuRef?.nativeElement;
    const icon = this.iconRef?.nativeElement;

    if (!menu) return; // если вдруг нет элемента — безопасно выйти

    // если меню не активно — ничего не делаем
    if (!menu.classList.contains('active')) return;

    const target = event.target as Node;

    // клик внутри меню → не закрываем
    if (menu.contains(target)) return;

    // клик по иконке → не закрываем
    if (icon && icon.contains(target)) return;

    // клик снаружи → закрываем меню
    menu.classList.remove('active');
  };

  setLang(lang: string): void {
    this.cookies.setLanguage(lang);
    location.reload();
  }
}
