import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 constructor(private _loginService: LoginService, private _router: Router) { }

 ngOnInit() {
  }

 logoutUser() {
    this._loginService.logout().then(response => {
      this._router.navigateByUrl('/login');
    }).catch(err => console.log(err));
  }

}