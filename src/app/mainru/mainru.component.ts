import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CookiesService } from 'app/cookies.service';
import { Meta, Title } from '@angular/platform-browser';
import { Renderer2 } from '@angular/core';
@Component({
  selector: 'app-mainru',
  templateUrl: './mainru.component.html',
  imports: [TranslateModule],
  styleUrls: ['./mainru.component.scss']
})
export class MainruComponent implements OnInit, OnDestroy {

  showScrollButton = false;
window: any;
 private links: HTMLLinkElement[] = [];


  constructor(private cookies: CookiesService, private translateService: TranslateService, private title: Title, private meta: Meta, private renderer: Renderer2) {}

  ngOnInit(): void {
    if(this.cookies.returnLang() != 'ru'){
      this.cookies.setLanguage('ru', true);
    }
    this.title.setTitle("Voeemsog — хоррор измерение");
    this.meta.updateTag({name: 'description', content:'Исследуйте комнаты, опасности и лор измерения Воеемсог.'});
    this.meta.updateTag({name: 'og:description', content:'Исследуйте комнаты, опасности и лор измерения Воеемсог.'});
    this.meta.updateTag({name: 'og:title', content:'Voeemsog - хоррор измерение'});
    this.meta.updateTag({name: "og:url", content: 'https://voeemsog.com/ru'});
    
    this.addAlternate('ru', 'https://voeemsog.com/ru');
    this.addAlternate('en', 'https://voeemsog.com/');
    this.addAlternate('x-default', 'https://voeemsog.com/');
  }
  ngOnDestroy(): void {
    // чистим head при уходе со страницы
    this.links.forEach(link => link.remove());
  }

  private addAlternate(lang: string, href: string) {
    const link = this.renderer.createElement('link');
    link.rel = 'alternate';
    link.hreflang = lang;
    link.href = href;

    this.renderer.appendChild(document.head, link);
    this.links.push(link);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const y = window.scrollY || document.documentElement.scrollTop;
    this.showScrollButton = y > 10;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  redirectToNews(section: number) {
    window.location.href = `/news?tag=${section}`;
  }
}
