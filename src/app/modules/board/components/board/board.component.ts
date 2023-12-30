import {Component, OnInit} from '@angular/core';
import {ITasks} from "../../../../settings/itasks";
import {MainService} from "../../../../settings/services/main.service";
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from "../../../modal/components/modal/modal.component";
import {map} from "rxjs";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public todo: ITasks [] = [];
  public progress: ITasks [] = [];
  public done: ITasks [] = [];

  constructor(
    private mainServ: MainService,
    public dialog: MatDialog
  ) {
  }

  openDialog(item: ITasks) {
    this.dialog.open(ModalComponent, {
      width: '40%',
      data: item
    }).afterClosed().subscribe(val => {

    })
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.mainServ.getValue().subscribe((res) => {
      this.todo = res.filter((item) => !item.status.completed && !item.status.inProgress);
      this.progress = res.filter((item) => item.status.inProgress);
      this.done = res.filter((item) => item.status.completed);
    });
  }

}
