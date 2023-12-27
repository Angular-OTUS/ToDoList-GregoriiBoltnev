import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ITasks} from "../itasks";
import {tap} from "rxjs/internal/operators/tap";

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
  getById(id:any):Observable<ITasks> {
    return this.http.get<any>(`http://localhost:3000/tasks/${id}`)
      .pipe(
        map ( res => {
        return {
          ...res,
          id,
        }
      }));
  }
}
