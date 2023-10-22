import {Component, OnInit} from '@angular/core';
import {ITasks} from "../../settings/interfaces/itasks";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})

export class ToDoListComponent implements OnInit {
  public tasks: ITasks[];
  public isLoading: boolean;
  public toggleClass: boolean;
  public selectedItemId!: number;
  public description: string | undefined;

  constructor() {
    this.tasks = [
      {
        id: 1,
        text: 'Купить молоко',
        description: 'Только сегодняшнее',
      },
      {
        id: 2,
        text: 'Помыть полы',
        description: 'Во всем доме'
      }
    ];
    this.isLoading = true;
    this.toggleClass = true;
    this.description = 'Кликни по любому таску';
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  updatTasks(task: ITasks) {
    this.tasks.unshift(task);
  }

  deleteTask(task: ITasks) {
    this.tasks = this.tasks.filter(item => item != task);
    this.toggleClass = true;
  }

  onSelectId(task: ITasks) {
    this.description = task.description;
    this.tasks.map(item => {
      if(item.id == task.id) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    })
  }
}
