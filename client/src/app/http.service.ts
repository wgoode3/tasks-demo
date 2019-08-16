import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient : HttpClient) { }

  getAll() : Observable<any> {
    return this._httpClient.get("/tasks");
  }

  create(task : object) : Observable<any>  {
    return this._httpClient.post("/tasks", task);
  }

}
