import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CookiesService } from 'app/cookies.service';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-about',
  imports: [TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(
    private translate: TranslateModule,
    private cookies: CookiesService,
    private title: Title,
    private meta: Meta
  ){}
  isLampActive: boolean = false;

  ngOnInit(){
    if(this.cookies.returnLang() == 'ru'){
      this.title.setTitle('Voeemsog | О нас');
      this.meta.updateTag({name: 'description', content:'Voeemsog - это активно развивающийся проект совместного веб-творчества. Не просто сборник историй - это целый мир, готовый стать объектом вашего исследования или основой для вашего творчества.'})
    }
    else{
      this.title.setTitle('Voeemsog | About');
    }
    this.meta.updateTag({name: 'description', content:'Voeemsog is a rapidly developing collaborative web creation project. It is not just a collection of stories - it is a whole world ready to become the subject of your research or the basis for your creativity. Our foundation is the parallel dimension of Voeemsog, full of secrets and mysteries. We give you the key to this door. Your imagination is your main tool here.'})


  }

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


