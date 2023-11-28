import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ITasks} from "../interfaces/itasks";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public isVisibleModal$ : BehaviorSubject<boolean>;
  public title:string;
  public task!:ITasks;
  constructor() {
    this.isVisibleModal$ = new BehaviorSubject<boolean>(false);
    this.title = '';
  }

  open():void{
    this.isVisibleModal$.next(true);
  }

  close():void{
    this.isVisibleModal$.next(false);
  }

  setTitle(task:ITasks):void {
    this.task = task;
    this.title = task.text;
  }
  getTitle():string {
    return this.title;
  }
  getTask():ITasks {
    return this.task;
  }
}
