import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';



@Injectable()
export class LoginService {

  constructor(private _http: Http) { }

  retrieveUsers() {
    return this._http.get('/api/users/read').map(data => data.json()).toPromise();
  }

  sendUser(user) {
    return this._http.post('/api/users/create', user).map(data => data.json()).toPromise();
  }

  login(user) {
    return this._http.post('/api/users/login', user).map(data => data.json()).toPromise();
  }

  grabUser() {
    return this._http.get('/api/users/account').map(data => data.json()).toPromise();
  }

  logout() {
    return this._http.get('/api/users/logout').map(data => data.json()).toPromise();
  }

}
