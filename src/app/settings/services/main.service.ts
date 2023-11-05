import {Injectable} from '@angular/core';
import {ITasks} from "../interfaces/itasks";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) {}

  getAll():Observable<ITasks[]> {
    return this.http.get<ITasks[]>('http://localhost:3000/tasks');
  }
  onEditTasks(id:number, task: ITasks):Observable<ITasks> {
    return this.http.put<ITasks>(`http://localhost:3000/tasks/${id}`, task)
  }

  onDelete(id: number): Observable<ITasks> {
    return this.http.delete<ITasks>(`http://localhost:3000/tasks/${id}`);
  }

  addTask(task: ITasks): Observable<ITasks> { 
    return this.http.post<ITasks>('http://localhost:3000/tasks', task);
  }
}
