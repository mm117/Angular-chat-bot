import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SignUp} from '../../models/signup.model';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase,
              private router: Router) { }

  signUp(signup: SignUp) {
    return this.afAuth.auth.createUserWithEmailAndPassword(signup.email, signup.password)
    .then((user) => {
      }).catch(error => console.log(error));

  }

}
