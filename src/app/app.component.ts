import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'datingapp-client';
  users: any;

  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
   this.getUsers();
  }

  getUsers() {
    this.http.get('http://localhost:5258/api/users').subscribe(response => {
      this.users = response;
      console.log(this.users);
    }, error => {
      console.log(error);
    })
  }
}
