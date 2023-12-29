import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { BoardComponent } from './components/board/board.component';



@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: BoardComponent, children:[

        ]
      }
    ])
  ],
  exports: [BoardComponent]
})
export class BoardModule { }
