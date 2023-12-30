import { Component } from '@angular/core';
import {ModalComponent} from "../../../modal/components/modal/modal.component";
import {MatDialog} from "@angular/material/dialog";
import {MainService} from "../../../../settings/services/main.service";
import {ToastService} from "../../../../settings/services/toast.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  public flag:string;
  public localesList = [
    { code: 'en-US', label: 'English' },
    { code: 'ru', label: 'Русский' }
  ];

  constructor(
    public dialog: MatDialog,
    private mainServe: MainService,
    public toastServ: ToastService
    ) {
    this.flag = 'Backlog';
  }

  onChangeFlag(tab: string) {
    this.flag = tab;
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '40%',
    }).afterClosed().subscribe((v) => {
      // this.mainServe.tasks.next(v);
    })
  }
}
