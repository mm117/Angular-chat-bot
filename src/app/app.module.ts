import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import {LoginService} from './services/login/login.service';
import {SignupService} from './services/signup/signup.service';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import {ChatService} from './services/chat/chat.service';
import {AccessTokenInterCeptor} from './interceptor/acccesstoken.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [LoginService, SignupService, ChatService,
           {  provide: HTTP_INTERCEPTORS,
             useClass: AccessTokenInterCeptor,
              multi: true
         }],
  bootstrap: [AppComponent]
})
export class AppModule { }
