import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ITasks} from "../../../../settings/itasks";
import {switchMap} from "rxjs/internal/operators/switchMap";
import {MainService} from "../../../../settings/services/main.service";

@Component({
  selector: 'app-view-backlog',
  templateUrl: './view-backlog.component.html',
  styleUrls: ['./view-backlog.component.scss']
})
export class ViewBacklogComponent implements OnInit{
  public postId!: string;
  public task!: ITasks;

  constructor(
    private routerActive: ActivatedRoute,
    private mainServ: MainService,
    private rout: Router
  ) {
  }

  ngOnInit(): void {
    this.routerActive.params.subscribe(res => {
      this.postId = res['id'];
    });

    this.routerActive.params.pipe(
      switchMap(params => {
        return this.mainServ.getById(params['id']);
      })).subscribe(task => {
      this.task = task;
    });
  }
}
