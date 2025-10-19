import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
@Component({
  selector: 'app-room',
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit {
  data: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    console.log("aa");
    this.api
      .getData('rooms') // 👈 обращается к baseUrl + "/items"
      .subscribe({
        next: (response) => (this.data = response),
        error: (err) => console.error(err),
      });
    console.log(this.data);
  }
}
