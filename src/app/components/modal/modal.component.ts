import { Component } from '@angular/core';
import {ModalService} from "../../settings/services/modal.service";
import {MainService} from "../../settings/services/main.service";
import {ITasks} from "../../settings/interfaces/itasks";
import {ToastService} from "../../settings/services/toast.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  public title:string;
  public task!:ITasks ;
  constructor(
    public modalServ:ModalService,
    private mainServ:MainService,
    public toast: ToastService
  ) {
    this.title = this.modalServ.getTitle();
    this.task = this.modalServ.getTask();
  }

  onEditTitle() {
    this.task.text = this.title;
    this.mainServ.onEditTasks(this.task);
    this.title = '';
    this.modalServ.close();
    this.toast.onActionText('Таск изменен');
  }
}
