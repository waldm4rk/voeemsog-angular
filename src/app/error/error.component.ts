import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CookiesService } from 'app/cookies.service';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-error',
  imports: [TranslateModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {
  constructor(private location: Location, private translate: TranslateModule, private cookies: CookiesService, private translateService: TranslateService, private title: Title) {}
  langCode: string = 'en_US';
  goBack(): void {
    const previousUrl = document.referrer;
    if(previousUrl.includes('/room?code=')){
      window.location.href = "/rooms";
      return;
    }
    window.location.href = "/";
  }
  ngOnInit(): void {
    if (this.cookies.returnLang() == 'en') {
      this.langCode = 'en_US';
    } else if (this.cookies.returnLang() == 'ru') {
      this.langCode = 'ru_RU';
    }
    this.translateService.use(this.cookies.returnLang()).subscribe((translations: any) => {
      this.title.setTitle("Voeemsog | " + (translations?.['ERROR']?.['ERROR'] ?? "Error"));
    });
  }
}
