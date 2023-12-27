import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  public flag:string;

  constructor() {
    this.flag = 'Backlog';
  }

  onChangeFlag(tab: string) {
    this.flag = tab;
  }
}
