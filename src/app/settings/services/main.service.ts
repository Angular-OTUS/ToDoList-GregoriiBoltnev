import {Injectable} from '@angular/core';
import {ITasks} from "../interfaces/itasks";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public url:string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/tasks'
  }

  getAll():Observable<ITasks[]> {
    return this.http.get<ITasks[]>(this.url);
  }
  onEditTasks(id:number, task: ITasks):Observable<ITasks> {
    return this.http.put<ITasks>(`${this.url}/${id}`, task)
  }

  onDelete(id: number): Observable<ITasks> {
    return this.http.delete<ITasks>(`${this.url}/${id}`);
  }

  addTask(task: ITasks): Observable<ITasks> {
    return this.http.post<ITasks>(this.url, task);
  }

  getById(id:any):Observable<ITasks> {
    return this.http.get<any>(`http://localhost:3000/tasks/${id}`)
      .pipe( map ( res => {
        return {
          ...res,
          id,
        }
      }));
  }
}
