import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITasks} from "../../settings/interfaces/itasks";
import {Renderer2} from '@angular/core';
import {MainService} from "../../settings/services/main.service";
import {ModalService} from "../../settings/services/modal.service";
import {ToastService} from "../../settings/services/toast.service";

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss']
})
export class ToDoListItemComponent {
  @Input() task!: ITasks
  @Output() onDeleteTask: EventEmitter<ITasks> = new EventEmitter<ITasks>();
  @Output() onEmitId: EventEmitter<ITasks> = new EventEmitter<ITasks>();
  public toggleSelectd: boolean;
  public newText: string;


  constructor(
    private modalserv:ModalService,
    public toast:ToastService,
  ) {
    this.toggleSelectd = false;
    this.newText = '';
  }


  deleteTask(id: number): void {
    if (this.task.id === id) this.onDeleteTask.emit(this.task);
    this.toast.onActionText('Таск удален');
  }

  emitTask(task: ITasks): void {
    task.selected = true;
    this.onEmitId.emit(task);
  }

  onEdit(task: ITasks) {
    this.modalserv.open();
    this.modalserv.setTitle(task);
  }
}
