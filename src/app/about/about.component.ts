import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-about',
  imports: [TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(
    private translate: TranslateModule
  ){}
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


