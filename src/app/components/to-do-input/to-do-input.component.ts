import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITasks} from "../../settings/interfaces/itasks";
import {ToastService} from "../../settings/services/toast.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.scss']
})
export class ToDoInputComponent implements OnInit{
  @Output() onAdd: EventEmitter<ITasks> = new EventEmitter<ITasks>();
  @Input() tasks!: ITasks[];
  public text:string;
  public description:string;
  public formTodo!: FormGroup;

  constructor(public toast:ToastService,  private fb:FormBuilder) {
    this.text = '';
    this.description = '';
  }

  ngOnInit(): void {
    this.formTodo = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addTask():void {
    const text:string = this.formTodo.value.title.trim();
    const description:string = this.formTodo.value.description.trim();
    const randomId = (min:number, max:number):number => Math.floor(Math.random() * (max - min + 1)) + min;
    const allTasksIds:number[] = this.tasks
      .reduce((accum:number[], item) => {
        if(item.id) accum.push(item.id);
        return accum;
      },[]);

    if(this.formTodo.value){
      const newTask: ITasks = {
        id: allTasksIds.includes(randomId(1, 100)) ? randomId(1, 1000)+randomId(1, 100) : randomId(1, 100),
        text,
        description,
        status: {
          inProgress:false,
          completed:false
        },
        selected:false,
      };

      this.formTodo.reset();
      this.onAdd.emit(newTask);
      this.toast.onActionText('Таск добавлен');
    }
  }
}
