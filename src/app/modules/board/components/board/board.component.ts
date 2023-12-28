import {Component, OnInit} from '@angular/core';
import {ITasks} from "../../../../settings/itasks";
import {MainService} from "../../../../settings/services/main.service";
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from "../../../modal/components/modal/modal.component";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit{
  public todo: ITasks [] = [];
  public progress: ITasks [] = [];
  public done: ITasks [] = [];

  constructor(
    private mainServ: MainService,
    public dialog: MatDialog
  ) {}

  openDialog(item:ITasks) {
    this.dialog.open(ModalComponent, {
      width: '40%',
      data: item
    }).afterClosed().subscribe(val => {
      this.getTasks();
    })
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.mainServ.getAll().subscribe({
      next: (res) => {
        console.log(res)
        res.forEach((item) => {
          if (item.status.completed) {
            this.done.push(item)
          } else if (item.status.inProgress) {
            this.progress.push(item)
          } else {
              this.todo.push(item)
          }


        })
      },
      error: (er) => {
        alert("что-то не так с сервером! Возмжно вы не запустили сервер командой json-server --watch db.json");
      }
    })

  }

}
