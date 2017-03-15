import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
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

  private extractData(res: Response) {
    let json = res.json();
    return json || { };
  }

}
