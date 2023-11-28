import { Component } from '@angular/core';
import {ModalService} from "./settings/services/modal.service";
import {ToastService} from "./settings/services/toast.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-OTUS';
  constructor(
    public modalServ:ModalService,
    public toastServ:ToastService
  ) {
  }
}
