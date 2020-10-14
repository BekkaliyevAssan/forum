import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable()
export class PostsInterceptor implements HttpInterceptor {
  token: string

  constructor(private userService: UserService, private injector: Injector) {
    console.log(this.userService.getToken())
  }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let userService = this.injector.get(UserService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: userService.getToken()
      }
    })
    return next.handle(tokenizedReq)
  }
}
