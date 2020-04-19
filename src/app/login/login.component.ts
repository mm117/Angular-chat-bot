import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login.model';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  logIn(username, password) {
    const loginInfo = new Login(username.value, password.value);
    this.loginService.login(loginInfo).catch(error => console.log(error));
  }
}
