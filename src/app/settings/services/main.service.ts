import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ITasks} from "../itasks";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public tasks :BehaviorSubject<ITasks[]> = new BehaviorSubject<ITasks[]>([]);

  public url :string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/tasks';
  }

  setValue() {
    this.getAll().subscribe((v) => this.tasks.next(v));
  }

  getValue():Observable<ITasks[]> {
    this.setValue();
    return this.tasks.asObservable();
  }

  onEditTasks(id:number, task: ITasks):Observable<ITasks> {
    return this.http.put<ITasks>(`${this.url}/${id}`, task)
  }

  onDelete(id: number): Observable<ITasks> {
    return this.http.delete<ITasks>(`${this.url}/${id}`);
  }

  getAll():Observable<ITasks[]> {
    return this.http.get<ITasks[]>(this.url);
  }

  addTask(task: ITasks): Observable<ITasks> {
    return this.http.post<ITasks>(this.url, task);
  }
  getById(id:any):Observable<ITasks> {
    return this.http.get<any>(`${this.url}/${id}`)
      .pipe(
        map ( res => {
        return {
          ...res,
          id,
        }
      }));
  }
}
