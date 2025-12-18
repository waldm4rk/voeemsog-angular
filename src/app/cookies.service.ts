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
  const path = window.location.pathname;
  if(path === '/'){
    this.cookieService.set('lang', 'en', {path: '/', sameSite: 'Lax'});
    console.log("a");
    window.location.reload();
  }
  else if(window.location.href.endsWith('/ru')){
    this.cookieService.set('lang', 'ru', {path: '/', sameSite: 'Lax'});
    window.location.reload();
  }
}
setLanguage(lang: string, reload: boolean) {
  this.cookieService.set('lang', lang);
  this.cookieService.set(
        'lang',
        lang,
        { path: '/', sameSite: 'Lax' }  // <-- ВАЖНО
      );
  // if(window.location.href.includes('/room') || window.location.href.includes('/rooms') || window.location.href.includes('/literature') || window.location.href.includes('/story') || window.location.href.includes('license')){
  //   window.location.reload();
  // }
  if(lang == 'en' && window.location.href.includes('/ru')){
    window.location.href = "/";
  }
  else if(lang == 'ru' && (window.location.href.endsWith('voeemsog.com/') || window.location.href.endsWith('localhost:4200/'))){
    window.location.href = "/ru";
  } else{
    if(reload){
      window.location.reload();
    }
  }
  // if(!window.location.href.includes('/ru')){
  //   window.location.reload();
  // }else{
  //   if(lang == 'en'){
  //     window.location.href = "/";
  //   }
  // }
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
