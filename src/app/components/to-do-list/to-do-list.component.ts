import {Component, InjectionToken, OnInit} from '@angular/core';
import {ITasks} from "../../settings/interfaces/itasks";
import {MainService} from "../../settings/services/main.service";

type filter = 'Completed' | 'InProggress' | 'All';

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

  constructor(public mainServ: MainService) {
    this.tasks = [];
    this.isLoading = true;
    this.toggleClass = true;
    this.description = 'Кликни по любому таску';
  }

  ngOnInit(): void {
    this.getTasks();
    setTimeout((): void => {
      this.isLoading = false;
    }, 500);
  }

  getTasks() {
    this.mainServ.getAll().subscribe({
      next: (res) => {
        this.tasks = res;
      },
      error:(er) => {
        alert("что-то не так с сервером! Возмжно вы не запустили сервер командой json-server --watch db.json");
      }
    })
  }

  updatTasks(task: ITasks): void {
    this.mainServ.addTask(task)
    .subscribe({
      next:(res: any) => this.tasks.push(res),
      error: error => console.log(error)
  });
  }

  deleteTask(task: ITasks): void {
    this.mainServ.onDelete(task.id)
    .subscribe({
      next:(res: any) => this.tasks = this.tasks.filter(item => item.id != task.id),
      error: error => console.log(error)
    });
    this.toggleClass = true;
  }

  onSelectId(task: ITasks): void {
    this.description = task.description;
    this.tasks.map((item: ITasks): void => {
      if (item.id == task.id) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    })
  }

  onfilter(str: filter) {
    switch (str) {
      case 'Completed' :
        this.mainServ.getAll().subscribe({
          next: (res) => {
            this.tasks = res;
            this.tasks = this.tasks.filter(item => item.status?.completed)
          } 
        });
      break;
      case 'InProggress': 
        this.mainServ.getAll().subscribe({
          next: (res) => {
            this.tasks = res;
            this.tasks = this.tasks.filter(item => item.status?.inProgress); 
          } 
        });
        break;
        default:
          this.getTasks(); 
    }
    
  }
}
