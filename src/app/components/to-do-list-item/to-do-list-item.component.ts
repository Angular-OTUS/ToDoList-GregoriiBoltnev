import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITasks} from "../../shared/interfaces/itasks";

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss']
})
export class ToDoListItemComponent {
  @Input() task!:ITasks
  @Output() onDeleteTask: EventEmitter<ITasks> = new EventEmitter<ITasks>();

  deleteTask(id: number) {
    if(this.task.id === id ) this.onDeleteTask.emit(this.task);
  }
}
