import {Component, OnInit} from '@angular/core';
import {ITasks} from "../../settings/interfaces/itasks";
import {MainService} from "../../settings/services/main.service";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})

export class ToDoListComponent implements OnInit {
  public tasks: ITasks[];
  public isLoading: boolean;
  public toggleClass: boolean;
  public description: string | undefined;

  constructor(public mainServ:MainService) {
    this.tasks = this.mainServ.tasks;
    this.isLoading = true;
    this.toggleClass = true;
    this.description = 'Кликни по любому таску';
  }

  ngOnInit(): void {
    setTimeout(():void => {
      this.isLoading = false;
    }, 500);
  }

  updatTasks(task: ITasks):void {
    this.mainServ.addTask(task);
  }

  deleteTask(task: ITasks): void {
    this.mainServ.onDelete(task.id);
    this.toggleClass = true;
    this.tasks = this.mainServ.tasks;
  }

  onSelectId(task: ITasks):void {
    this.description = task.description;
    this.tasks.map((item:ITasks):void => {
      if(item.id == task.id) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    })
  }
}
