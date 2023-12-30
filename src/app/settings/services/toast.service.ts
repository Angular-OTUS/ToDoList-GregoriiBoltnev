import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  public isVisibleToast$: BehaviorSubject<boolean>;
  public text$!: BehaviorSubject<string>;

  constructor() {
    this.isVisibleToast$ = new BehaviorSubject<boolean>(false);
    this.text$ = new BehaviorSubject<string>('');
  }

  open(): void {
    this.isVisibleToast$.next(true);
  }

  close(): void {
    setTimeout(() => {
      this.isVisibleToast$.next(false);
    }, 500)
  }

  onActionText(tex:string):void {
    this.text$.next(tex);
    setTimeout(()=> {
      this.text$.next('');
      this.close();
    }, 2000)
  }
}
