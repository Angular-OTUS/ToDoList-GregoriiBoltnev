import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoListItemComponent } from './components/to-do-list-item/to-do-list-item.component';
import { ToDoInputComponent } from './components/to-do-input/to-do-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {SharedModule} from "./modules/shared/shared.module";
import { ModalComponent } from './components/modal/modal.component';
import { ToastComponent } from './components/toast/toast.component';
import {MatRadioModule} from '@angular/material/radio';
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import { ToDoItemViewComponent } from './components/to-do-item-view/to-do-item-view.component';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoListItemComponent,
    ToDoInputComponent,
    ModalComponent,
    ToastComponent,
    ToDoItemViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    SharedModule,
    MatRadioModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterOutlet,
    AppRoutingModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
