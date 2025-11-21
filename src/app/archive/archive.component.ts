import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { CookiesService } from 'app/cookies.service';
@Component({
  selector: 'app-archive',
  imports: [TranslateModule],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})
export class ArchiveComponent {
  constructor(
    private translate: TranslateModule,
    private translateService: TranslateService,
    private title: Title,
    private cookies: CookiesService
  ) {}
  gotourl(url: string) {
    window.location.href = url;
  }
  ngOnInit() {
    this.translateService.use(this.cookies.returnLang()).subscribe((translations: any) => {
      this.title.setTitle("Voeemsog | " + (translations?.['ARCHIVE']?.['ARCHIVE'] ?? "Archive"));
    });
  }
}
