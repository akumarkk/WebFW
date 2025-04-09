import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'http';
  http:HttpClient;
  // observable = new Observable<any>();

  constructor(http:HttpClient) {
    this.http = http;
    this.getData();
  }

  getData() {
    // let observable = new Observable<any>((observer) =>{
    //   let val =  this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos/1');
    //   observer.next(val);
      
    // });

    let observable =  this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos/1');
      
    observable.subscribe({next: (data) => {
      console.log(data);
      // console.log(data.json());
    }});

    // (data) => {
    //   console.log(data);
    //   console.log(data.json());
    // }
    // return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
