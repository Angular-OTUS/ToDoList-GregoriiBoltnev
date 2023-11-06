import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {MainService} from "../../settings/services/main.service";
import {ITasks} from "../../settings/interfaces/itasks";

@Component({
  selector: 'app-to-do-item-view',
  templateUrl: './to-do-item-view.component.html',
  styleUrls: ['./to-do-item-view.component.scss'],
})
export class ToDoItemViewComponent implements OnInit {
  public postId!: any;
  public task!: ITasks;

  constructor(
    private routerActive: ActivatedRoute,
    private mainServ: MainService,
    private rout: Router
  ) {
  }

  ngOnInit(): void {
    this.routerActive.params.subscribe(res => {
      this.postId = res;
    });
    this.routerActive.params.pipe(
      switchMap(params => {
        return this.mainServ.getById(params['id']);
      })).subscribe(task => {
      this.task = task;
      console.log(this.task);
    });

  }

  onClose() {
    this.rout.navigate(['/']);
  }
}
