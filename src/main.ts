import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { routes } from 'app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(), // <-- добавили HttpClient
    ...(appConfig.providers || []) // если у тебя есть другие провайдеры в appConfig
  ]
})
.catch(err => console.error(err));