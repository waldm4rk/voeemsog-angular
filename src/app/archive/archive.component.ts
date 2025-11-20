import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-archive',
  imports: [TranslateModule],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})
export class ArchiveComponent {
  constructor(private translate: TranslateModule) {}
  gotourl(url: string) {
    window.location.href = url;
  }
}
