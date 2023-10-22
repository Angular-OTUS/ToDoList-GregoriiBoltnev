import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { MatButtonModule } from "@angular/material/button";
import { TooltipDirective } from './components/tooltip.directive';



@NgModule({
  declarations: [
    ButtonComponent,
    TooltipDirective
  ],
  exports: [
    ButtonComponent,
    TooltipDirective
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
