import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ITasks} from "../../../../settings/itasks";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MainService} from "../../../../settings/services/main.service";
import {ToastService} from "../../../../settings/services/toast.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public formTodo!: FormGroup;
  public actionBtn: string;


  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: ITasks,
    private fb: FormBuilder,
    private mainServe: MainService,
    public toast: ToastService
  ) {
    this.actionBtn = 'Edd';
  }

  ngOnInit(): void {
    this.formTodo = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      id: [''],
    });
    if (this.editData) {
      this.actionBtn = 'Edit';
      this.formTodo.controls['id'].setValue(this.editData.id);
      this.formTodo.controls['title'].setValue(this.editData.title);
      this.formTodo.controls['description'].setValue(this.editData.description);
      if (this.editData.status.completed) {
        this.formTodo.controls['status'].setValue('done');
      } else if (this.editData.status.inProgress) {
        this.formTodo.controls['status'].setValue('inprogres');
      }

    }
  }

  create(): void {
    const randomId = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
    if (this.formTodo.value) {
      const newTask: ITasks = {
        id: randomId(1, 3000),
        title: this.formTodo.value.title,
        description: this.formTodo.value.description,
        status: {
          inProgress: this.formTodo.value.status == 'inprogres',
          completed: this.formTodo.value.status == 'done'
        },
        selected: false,
      };
      this.mainServe.addTask(newTask).subscribe({
        next: (res: any) => {
          this.mainServe.getValue();
          this.toast.open();
          this.toast.onActionText('Таск добавлен');
        },
        error: error => console.log(error)
      });
      this.dialogRef.close('add');
    }
  }

  update(task: ITasks): void {
    const newTask: ITasks = {
      id: task.id,
      title: task.title,
      description: task.description,
      status: {
        inProgress: this.formTodo.value.status == 'inprogres',
        completed: this.formTodo.value.status == 'done'
      },
      selected: false,
    };
    this.mainServe.onEditTasks(newTask.id, newTask).subscribe({
      next: (res: any) => {
        this.mainServe.getValue();
        this.toast.open();
        this.toast.onActionText('Таск изменен');
      },
      error: error => console.log(error)
    });
    this.dialogRef.close('edit');
  }

  delete(id: number) {
    this.mainServe.onDelete(id).subscribe({
      next: (res: any) => {
        this.mainServe.getValue();
        this.toast.open();
        this.toast.onActionText('Таск удален');
      },
      error: error => console.log(error)
    });
  }
}
