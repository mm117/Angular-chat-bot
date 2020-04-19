import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AccessTokenInterCeptor implements HttpInterceptor {
  private token  = 'ffc9ea25660548ea8119d5fc7938bc8d';
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = localStorage.getItem('user');
    if (currentUser) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.token}`
            }
        });
    }

    return next.handle(request);
}
}
