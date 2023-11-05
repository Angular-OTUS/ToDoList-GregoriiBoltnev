import { Injectable } from '@angular/core';
import {ITasks} from "../interfaces/itasks";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public tasks: ITasks[];

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
  }

  onEditTasks(task:ITasks):void {
    this.tasks.map(item => {
      if(item.id === task.id &&  item.description != task.description) item.description = task.description;
    })
  }
  onDelete(id: number):ITasks[] {
    this.tasks = this.tasks.filter(item => item.id != id);
    return this.tasks;
  }

  addTask(task: ITasks):number {
    return this.tasks.unshift(task);
  }
}
