import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../settings/services/modal.service";
import {MainService} from "../../settings/services/main.service";
import {ITasks} from "../../settings/interfaces/itasks";
import {ToastService} from "../../settings/services/toast.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public title:string;
  public task:ITasks;
  public formModal!:FormGroup
  constructor(
    public modalServ:ModalService,
    private mainServ:MainService,
    public toast: ToastService,
    private fb:FormBuilder
  
  ) {
    this.title = this.modalServ.getTitle();
    this.task = this.modalServ.getTask();
  }
  ngOnInit(): void {
    this.formModal = this.fb.group({
      title: [this.title, Validators.required],
      status: ['', Validators.required],
    });
  }

  onEditTitle() {
    this.task.text = this.title;
    
    if (
      this.formModal.value.status == 'Completed' && 
      this.task.status != undefined &&
      this.task.status.completed == false
      ){
      this.task.status.completed = true;   
      this.task.status.inProgress = false;     
    } else if (
      this.formModal.value.status == 'InProggress' && 
      this.task.status != undefined &&
      this.task.status.inProgress == false
    ) {
      this.task.status.inProgress = true; 
      this.task.status.completed = false;   
    }
    
    this.mainServ.onEditTasks(this.task.id, this.task).subscribe()
    this.modalServ.close();
    this.toast.onActionText('Таск изменен');
  }
}
