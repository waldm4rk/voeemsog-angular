import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  isLampActive: boolean = false;

  toggleLamp(event: Event) {
    event.stopPropagation();
    
    const clickPoint = event.currentTarget as HTMLElement;
    clickPoint.classList.add('active');

    setTimeout(() => {
      clickPoint.classList.remove('active');
    }, 300);

    this.isLampActive = !this.isLampActive;
  }
}


