import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: Object;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  getUsers() {
    return this.http.get('/api/users')
      .map(this.extractData)
      .subscribe((value) => {
        this.users = value;
        console.log(value);
      });
  }

  getUser(id) {
    return this.http.get('/api/users/' + id)
      .map(this.extractData)
      .subscribe((value) => {
        this.users = value;
        console.log(value);
      });
  }

  postUser(id) {
    var payload = JSON.stringify({ "email": "email", "password": "password" });
    var creds = "data=home";

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');

    // return this.http.post('/api/users/' + id, payload, {
    return this.http.post('/api/users/' + id, payload, {
        headers: headers
      })
    // return this.http.post('/api/users/' + id, {data: "home"})
      .map(this.extractData)
      .subscribe((value) => {
        this.users = value;
        console.log(value);
      });
  }

  putUser(id) {
    var creds = "data=home";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.put('/api/users/' + id, creds, {
        headers: headers
      })
      .map(this.extractData)
      .subscribe((value) => {
        this.users = value;
        console.log(value);
      });
  }

  private extractData(res: Response) {
    let json = res.json();
    return json || { };
  }

}
