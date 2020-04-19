import { Component, OnInit } from '@angular/core';
import { SignUp } from '../models/signup.model';
import { SignupService } from '../services/signup/signup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService: SignupService, private router: Router) { }

  ngOnInit() {
  }

  signUp(name, email, password, verifypassword) {
    const signUp = new SignUp(name.value, email.value, password.value, verifypassword.value);
    this.signupService.signUp(signUp).then(resolve => this.router.navigate(['chat']))
    .catch(error => console.log(error));

  }

}
