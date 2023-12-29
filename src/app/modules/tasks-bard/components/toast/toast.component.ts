import { Component } from '@angular/core';
import {ToastService} from "../../../../settings/services/toast.service";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  constructor(public tost:ToastService) {
  }
}
