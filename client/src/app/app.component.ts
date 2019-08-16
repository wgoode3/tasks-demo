import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks : any = []
  newTask : any = {isComplete: false};

  constructor(private _http : HttpService) { }

  ngOnInit() : void {
    let observable : Observable<any> = this._http.getAll();
    observable.subscribe(data => {
      this.tasks = data;
    });
  }

  addTask() : void {
    let observable : Observable<any> = this._http.create(this.newTask);
    observable.subscribe(data => {
      console.log(data);
      this.ngOnInit();
      this.newTask = {isComplete: false};
    });
  }
}
