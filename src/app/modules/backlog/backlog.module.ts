import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BacklogComponent } from './components/backlog/backlog.component';
import {RouterModule} from "@angular/router";
import { ViewBacklogComponent } from './components/view-backlog/view-backlog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BacklogComponent,
    ViewBacklogComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    RouterModule.forChild([
      {
        path: '', component: BacklogComponent, children:[
          {path: '', redirectTo:'view', pathMatch: 'full'},
          {path: 'view/:id', component: ViewBacklogComponent},
        ]
      }
    ])
  ],
  exports: [BacklogComponent]
})
export class BacklogModule { }
