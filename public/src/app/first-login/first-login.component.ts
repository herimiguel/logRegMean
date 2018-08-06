import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-login',
  templateUrl: './first-login.component.html',
  styleUrls: ['./first-login.component.css']
})

export class FirstLoginComponent implements OnInit {
  
  users
  user = new User()  
  exists = false
  registered = false
  pwError = false
  emailError = false
  onlyPW = false
  login

  constructor(private _loginService: LoginService, private _router: Router) { }

  ngOnInit(){
    console.log('constructor - login.component - ngOnInit - HIT!')
    this.getUsers();
    this.login = {email: '', password: ''}
  }
  
  getUsers() {
    this._loginService.retrieveUsers()
      .then(users => this.users = users)
      .catch(err => console.log(err))
  }

  loginUser(){
    this.registered = false;
    this.pwError = false;
    this.emailError = false;
    this.onlyPW = false;
    for (let i in this.users) {
      if (this.users[i].email == this.login.email){
        if (this.users[i].password == this.login.password) {
          this.registered = true;
        } else {
          this.pwError = true;
          this.onlyPW = true;
        }
      }
    }

    if (this.registered){
      this._loginService.login(this.login).then(response => {
        this._router.navigateByUrl('/home');
      }).catch(err => console.log(err));
    } else if (this.onlyPW) {
      this.emailError = false;
    } else {
      this.emailError = true;
    }
  }
}
