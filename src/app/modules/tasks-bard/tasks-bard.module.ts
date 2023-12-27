import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import {RouterModule, Routes} from "@angular/router";

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: MainPageComponent, children:[
          {
            path: '', redirectTo:'/tasks-board/backlog',
            pathMatch: 'full'
          },
          {
            path: 'backlog',
            loadChildren: () => import('../../modules/backlog/backlog.module').then(m => m.BacklogModule),
            data: { title: 'Backlog'}
          },
          {
            path: 'board',
            loadChildren: () => import('../../modules/board/board.module').then(m => m.BoardModule),
            data: { title: 'Backlog'}
          },
        ]
      },
    ])
  ],
  exports: [MainPageComponent]
})
export class TasksBardModule { }
