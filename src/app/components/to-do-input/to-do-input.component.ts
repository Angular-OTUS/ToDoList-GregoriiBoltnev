import {Component, EventEmitter, Output} from '@angular/core';
import {ITasks} from "../../shared/interfaces/itasks";

@Component({
  selector: 'app-to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.scss']
})
export class ToDoInputComponent {
  @Output() onAdd: EventEmitter<ITasks> = new EventEmitter<ITasks>();
public text:string = '';
  addTask():void {
    if(this.text.trim() && this.text){
      const newTask: ITasks = {
        text: this.text,
        id: Math.random(),
      };

      this.text = '';
      this.onAdd.emit(newTask);
    }
  }
}
