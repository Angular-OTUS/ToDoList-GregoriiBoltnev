import {Component, OnInit} from '@angular/core';
import {ITasks} from "../../../../settings/itasks";
import {MainService} from "../../../../settings/services/main.service";

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit{
 public tasks: ITasks [] = [];

  constructor(
    private mainServ: MainService
  ) {}

  ngOnInit(): void {
        this.getTasks();
 }

  getTasks() {
    console.log(this.mainServ.tasks)
    this.mainServ.getAll().subscribe({
      next: (res) => {
        this.tasks = res;
      },
      error:(er) => {
        alert("что-то не так с сервером! Возмжно вы не запустили сервер командой json-server --watch db.json");
      }
    })
  }


}
