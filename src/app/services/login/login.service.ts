import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Login} from '../../models/login.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase,
              private router: Router) { }
   login(login: Login) {
    return this.afAuth.auth.signInWithEmailAndPassword(login.userName, login.password)
    .then((user) => {
       localStorage.setItem('user', user.toString());
       this.router.navigate(['chat']);
    });

   }
}
