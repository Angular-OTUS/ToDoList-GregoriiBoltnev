import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITasks} from "../../settings/interfaces/itasks";
import {Renderer2} from '@angular/core';

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


  constructor(private renderer: Renderer2) {
    this.toggleSelectd = false;
  }

  changeBgColor(node: HTMLElement): void {
    console.log('1111')
    // if (node.classList.contains('color-blue')) {
    //   this.renderer.removeClass(node, 'color-blue');
    //   this.renderer.addClass(node, 'color-red');
    // } else {
    //   this.renderer.removeClass(node, 'color-red');
    //   this.renderer.addClass(node, 'color-blue');
    // }
  }

  deleteTask(id: number): void {
    if (this.task.id === id) this.onDeleteTask.emit(this.task);
  }

  emitTask(task: ITasks): void {
    task.selected = true;
    this.onEmitId.emit(task);
    // console.log(node.target.classList.contains('task'))
    // if (node.target.className.includes('selected')) {
    //   this.renderer.removeClass(node, 'selected');
    // } else {
    //   this.renderer.addClass(node, 'selected');
    // }
  }

}
