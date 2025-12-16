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

  if(window.location.href.endsWith('voeemsog.com/') || window.location.href.endsWith('localhost:4200/')){
    this.cookieService.set('lang', 'en', {path: '/', sameSite: 'Lax'});
    window.location.reload();
  }
  else if(window.location.href.endsWith('/ru')){
    this.cookieService.set('lang', 'ru', {path: '/', sameSite: 'Lax'});
    window.location.reload();
  }
}
setLanguage(lang: string) {
  this.cookieService.set('lang', lang);
  this.cookieService.set(
        'lang',
        lang,
        { path: '/', sameSite: 'Lax' }  // <-- ВАЖНО
      );
  // if(window.location.href.includes('/room') || window.location.href.includes('/rooms') || window.location.href.includes('/literature') || window.location.href.includes('/story') || window.location.href.includes('license')){
  //   window.location.reload();
  // }
  if(!window.location.href.includes('/ru')){
    window.location.reload();
  }else{
    if(lang == 'en'){
      window.location.href = "/";
    }
  }
  if(window.location.href.endsWith('voeemsog.com/') || window.location.href.endsWith("localhost:4200/")){
    if(lang == 'ru'){
      window.location.href = "/ru";
    }
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
