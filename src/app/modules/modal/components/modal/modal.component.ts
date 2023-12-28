import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ITasks} from "../../../../settings/itasks";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MainService} from "../../../../settings/services/main.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{
  public formTodo!: FormGroup;
  public actionBtn: string;


  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: ITasks,
    private fb:FormBuilder,
    private mainServe: MainService
  ) {
    this.actionBtn = 'Edd';
  }

  ngOnInit(): void {
    this.formTodo = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
    });
    if(this.editData){
      this.actionBtn = 'Edit';
      this.formTodo.controls['title'].setValue(this.editData.title);
      this.formTodo.controls['description'].setValue(this.editData.description);
      if (this.editData.status.completed) {
        this.formTodo.controls['status'].setValue('done');
      } else if (this.editData.status.inProgress) {
        this.formTodo.controls['status'].setValue('inprogres');
      }

    }
  }

  create() :void {
    const randomId = (min:number, max:number):number => Math.floor(Math.random() * (max - min + 1)) + min;
    if(this.formTodo.value){
      const newTask: ITasks = {
        id: randomId(1,3000),
        title: this.formTodo.value.title,
        description: this.formTodo.value.description,
        status: {
          inProgress: this.formTodo.value.status == 'inprogres',
          completed: this.formTodo.value.status == 'done'
        },
        selected:false,
      };
    this.mainServe.addTask(newTask).subscribe({
      next:(res: any) => console.log(res),
      error: error => console.log(error)
    });
    this.dialogRef.close('close');
    }
  }
  update() :void{
    console.log(this.formTodo.value)
  }
}
