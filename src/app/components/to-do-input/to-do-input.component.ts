import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITasks} from "../../shared/interfaces/itasks";

@Component({
  selector: 'app-to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.scss']
})
export class ToDoInputComponent {
  @Output() onAdd: EventEmitter<ITasks> = new EventEmitter<ITasks>();
  @Input() tasks!: ITasks[];
  public text:string = '';
  
  addTask():void {
    const text:string = this.text.trim();
    const randomId = (min:number, max:number):number => Math.floor(Math.random() * (max - min + 1)) + min;
    const allTasksIds:number[] = this.tasks
      .reduce((accum:number[], item) => {
        if(item.id) accum.push(item.id);
        return accum;
      },[]);
    
    if(text){
      const newTask: ITasks = {
        text: this.text,
        id: allTasksIds.includes(randomId(1, 100)) ? randomId(1, 1000)+randomId(1, 100) : randomId(1, 100),
      };
      
      this.text = '';
      this.disableButton = true;
      this.onAdd.emit(newTask);
    }
  }
}
