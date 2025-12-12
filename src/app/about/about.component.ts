import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CookiesService } from 'app/cookies.service';
import { Meta, Title } from '@angular/platform-browser';
import { ApiService } from 'app/services/api.service';
import { HttpResponse } from '@angular/common/http';
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
    private meta: Meta,
    private apiService: ApiService
  ){}
  isLampActive: boolean = false;
  donationInfo: string[] = ['Donate', '0', '1'];
  langCode: string = 'en_US';
  ngOnInit(){
    if(this.cookies.returnLang() == 'ru'){
      this.title.setTitle('Voeemsog | О нас');
      this.meta.updateTag({name: 'description', content:'Voeemsog - это активно развивающийся проект совместного веб-творчества. Не просто сборник историй - это целый мир, готовый стать объектом вашего исследования или основой для вашего творчества.'})
      this.langCode = 'ru_RU';
    }
    else{
      this.title.setTitle('Voeemsog | About');
      this.langCode = 'en_US';
    }
    this.meta.updateTag({name: 'description', content:'Voeemsog is a rapidly developing collaborative web creation project. It is not just a collection of stories - it is a whole world ready to become the subject of your research or the basis for your creativity. Our foundation is the parallel dimension of Voeemsog, full of secrets and mysteries. We give you the key to this door. Your imagination is your main tool here.'})

    this.getDonation();
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
  getDonation(){
    this.apiService
      .getData<string[]>(`donate?lang=${this.langCode}`)
      .subscribe({
        next: (response: HttpResponse<string[]>) => {
          if(response.body){
            this.donationInfo = response.body;
            console.log(this.donationInfo);
          }
        },
        error: (err) => {
        },
    });
  }
  toNumber(str: string): number{
    return parseFloat(str);
  }
}


