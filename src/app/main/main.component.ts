import { Component, ElementRef, AfterViewInit, HostListener } from '@angular/core';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CookiesService } from 'app/cookies.service';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  imports: [TranslateModule],
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {

  showScrollButton = false;
window: any;

  constructor(private el: ElementRef, private cookies: CookiesService, private translateService: TranslateService, private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.cookies.updateLang();
    this.title.setTitle("Voeemsog");
    this.meta.updateTag({name: 'description', content:'Welcome to Voeemsog dimension! Dive in unique horror experience right now!'})
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
      this.el.nativeElement.querySelectorAll('.infoMark');

    infoMarks.forEach(infoMark => {
      const tooltip = infoMark.nextElementSibling as HTMLElement | null;
      if (!tooltip || !tooltip.classList.contains('tooltiptext')) return;

      infoMark.addEventListener('mouseenter', () => {
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
