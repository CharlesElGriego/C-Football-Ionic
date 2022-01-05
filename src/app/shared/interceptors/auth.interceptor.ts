import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const api_token = '45903a62c24b4c76b7039d9fda6812c9';
    const headers = req.clone({
      headers: req.headers.set('X-Auth-Token', `${api_token}`),
    });

    return next.handle(headers);
  }
}
