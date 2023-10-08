import {Component, EventEmitter, Output} from '@angular/core';
import {ITasks} from "../../settings/interfaces/itasks";

@Component({
  selector: 'app-to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.scss']
})
export class ToDoInputComponent {
  @Output() onAdd: EventEmitter<ITasks> = new EventEmitter<ITasks>();
  public text:string = '';
  public disableButton: boolean = true;

  addTask():void {
    if(this.text.trim() && this.text){
      this.disableButton = false;
      const newTask: ITasks = {
        text: this.text,
        id: Math.random(),
      };
      
      this.text = '';
      this.disableButton = true;
      this.onAdd.emit(newTask);
    }
  }
}
