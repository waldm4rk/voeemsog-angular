import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class CookiesService {
constructor(private cookieService: CookieService, private translate: TranslateService) {}

ngOnInit() {
  if(!this.cookieService.check('lang')) {
    const lang = this.translate.getBrowserLang() || 'en';
    this.cookieService.set(
        'lang',
        lang,
        { path: '/', sameSite: 'Lax' }  // <-- ВАЖНО
      );
  }
  this.translate.use(this.cookieService.get('lang'));
}
setLanguage(lang: string) {
  this.cookieService.set('lang', lang);
  this.cookieService.set(
        'lang',
        lang,
        { path: '/', sameSite: 'Lax' }  // <-- ВАЖНО
      );
  if(window.location.href.includes('/room') || window.location.href.includes('/rooms') || window.location.href.includes('/literature') || window.location.href.includes('/story')){
    window.location.reload();
  }
  this.translate.use(lang);
}
updateLang(){
  if(!this.cookieService.check('lang')) {
    const lang = this.translate.getBrowserLang() || 'en';
    this.cookieService.set(
        'lang',
        lang,
        { path: '/', sameSite: 'Lax' }  // <-- ВАЖНО
      );
  }
  this.translate.use(this.cookieService.get('lang'));
}
returnLang(): string {
  this.updateLang();
  return this.cookieService.get('lang');
}
getCookie(name: string): string {
  return this.cookieService.get(name);
}
}
