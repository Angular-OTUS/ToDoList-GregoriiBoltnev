import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ITasks} from "../itasks";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public tasks :ITasks[] = [];
  public url :string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/tasks';
  }
  getAll():Observable<ITasks[]> {
    return this.http.get<ITasks[]>(this.url);
  }

  addTask(task: ITasks): Observable<ITasks> {
    console.log(task)
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
