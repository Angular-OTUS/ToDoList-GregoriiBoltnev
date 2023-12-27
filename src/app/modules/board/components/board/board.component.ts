import {Component, OnInit} from '@angular/core';
import {ITasks} from "../../../../settings/itasks";
import {MainService} from "../../../../settings/services/main.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit{

  public tasks: ITasks [] = [];

  constructor(
    private mainServ: MainService
  ) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.mainServ.getAll().subscribe({
      next: (res) => {
        this.tasks = res;
      },
      error: (er) => {
        alert("что-то не так с сервером! Возмжно вы не запустили сервер командой json-server --watch db.json");
      }
    })

  }

}
