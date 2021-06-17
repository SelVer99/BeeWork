import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import { Storage } from '@ionic/storage';
import { AUTH_TOKEN } from '../constants';
import {switchMap} from 'rxjs/operators';


@Injectable()
export class TokenService implements HttpInterceptor {

  constructor(private storage: Storage) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return from(this.storage.get(AUTH_TOKEN).then(
      token => {
        if(token) {
          const header = req.headers.append('Authorization', 'Bearer ' + token);
          return req.clone({headers: header});
        } else {
          return req;
        }
      })
    ).pipe(
      switchMap(request => next.handle(request))
    );
  }
}
