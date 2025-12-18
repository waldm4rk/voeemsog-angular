import { Component, ElementRef, AfterViewInit, HostListener } from '@angular/core';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CookiesService } from 'app/cookies.service';
import { Meta, Title } from '@angular/platform-browser';
import { OnInit, OnDestroy } from '@angular/core';
import { Renderer2 } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  imports: [TranslateModule],
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {

  showScrollButton = false;
window: any;
 private links: HTMLLinkElement[] = [];


  constructor(private el: ElementRef, private cookies: CookiesService, private translateService: TranslateService, private title: Title, private meta: Meta, private renderer: Renderer2) {}

  ngOnInit(): void {
    if(this.cookies.returnLang() != 'en'){
      this.cookies.setLanguage('en', true);
    }
    this.title.setTitle("Voeemsog — horror dimension");
    this.meta.updateTag({name: 'description', content:'Explore rooms, dangers and lore of the Voeemsog dimension.'});
    this.meta.updateTag({name: 'og:description', content:'Explore rooms, dangers and lore of the Voeemsog dimension.'});
    this.meta.updateTag({name: 'og:title', content:'Voeemsog — horror dimension'});
    this.meta.updateTag({name: "og:url", content: 'https://voeemsog.com/'});
    
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
  ngAfterViewInit(): void {
    const infoMarks: NodeListOf<HTMLElement> =
      this.el.nativeElement.querySelectorAll('.infoMarkWrapper .infoMark');
    const infoMarkWrapper: HTMLDivElement = this.el.nativeElement.querySelector(".infoMarkWrapper");
    infoMarks.forEach(infoMark => {
      const tooltip = infoMark.nextElementSibling as HTMLElement | null;
      if (!tooltip || !tooltip.classList.contains('tooltiptext')) return;

      infoMarkWrapper.addEventListener('mouseenter', () => {
        const rect = infoMark.getBoundingClientRect();
        tooltip.style.position = 'fixed';
        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.top = `${rect.top - tooltip.offsetHeight - 30}px`;
        tooltip.style.transform = 'translateX(-50%)';
        tooltip.style.opacity = '1';
        tooltip.style.transition = 'opacity 0.2s';
      });

      infoMark.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
      });

      window.addEventListener('scroll', () => {
        tooltip.style.opacity = '0';
      });
    });
  }
  redirectToNews(section: number) {
    window.location.href = `/news?tag=${section}`;
  }
}
