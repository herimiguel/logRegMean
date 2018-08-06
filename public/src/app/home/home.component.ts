import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = {};
  
  constructor(private _loginService: LoginService, private _router: Router) { }

  ngOnInit() {
    this.currentUser();
    console.log(this.user)
  }

  currentUser() {
    this._loginService.grabUser().then(user => this.user = user).catch(err => console.log(err));
  }

  logoutUser() {
    this._loginService.logout().then(response => {
      this._router.navigateByUrl('/');
    }).catch(err => console.log(err));
  }
}