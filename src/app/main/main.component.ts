import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const infoMarks: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.infoMark');

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
}
