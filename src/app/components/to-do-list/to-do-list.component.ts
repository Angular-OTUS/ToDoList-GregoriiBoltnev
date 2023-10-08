import {Component, OnInit} from '@angular/core';
import {ITasks} from "../../settings/interfaces/itasks";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})

export class ToDoListComponent implements OnInit{
  public tasks:ITasks[];
  public isLoading: boolean;

  constructor() {
    this.tasks = [{id:1, text:'Купить молоко'}, {id:2, text:'Помыть полы'}];
    this.isLoading = true;
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.isLoading = false;
      console.log(this.isLoading);
    }, 500);
  }

  updatTasks(task: ITasks) {
    this.tasks.unshift(task);
  }

  deleteTask(task: ITasks) {
    this.tasks = this.tasks.filter(item => item != task);
  }
}
