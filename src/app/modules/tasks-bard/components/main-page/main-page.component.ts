import { Component } from '@angular/core';
import {ITasks} from "../../../../settings/itasks";
import {ModalComponent} from "../../../modal/components/modal/modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  public flag:string;

  constructor(public dialog: MatDialog) {
    this.flag = 'Backlog';
  }

  onChangeFlag(tab: string) {
    this.flag = tab;
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '40%',
    }).afterClosed().subscribe((v) => {
      console.log(v);
    })
  }
}
