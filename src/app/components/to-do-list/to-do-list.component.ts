import {Component} from '@angular/core';
import {ITasks} from "../../shared/interfaces/itasks";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})

export class ToDoListComponent {
  public tasks:ITasks[] = [{id:1, text:'Купить молоко'}, {id:2, text:'Помыть полы'}];

  updatTasks(task: ITasks) {
    this.tasks.unshift(task);
  }

  deleteTask(task: ITasks) {
    this.tasks = this.tasks.filter(item => item != task);
  }
}
