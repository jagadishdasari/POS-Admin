import { Injectable } from '@angular/core';
import { AuthserviceService } from '../authServices/authservice.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authenticationService:AuthserviceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // add auth header with jwt if user is logged in and request is to api url
        const currentUser = this.authenticationService.getUser();
        if (currentUser) {
            request = request.clone({
                setHeaders: {
                  Authorization : `${currentUser}`
                }
            });
        }

        return next.handle(request);
  }
}
