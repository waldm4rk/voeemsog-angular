import { Component, importProvidersFrom } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

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

  constructor(private translate: TranslateService) {
  translate.addLangs(['en', 'ru']);

  // Берём язык браузера
  const browserLang = translate.getBrowserLang() || 'en';
  translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
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
