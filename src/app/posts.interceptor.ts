import { Injectable } from '@angular/core';
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

  constructor(private userService: UserService) {
    this.token = this.userService.isAuthorized.access_token || ''
  }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if(this.token) {
      const reqPost = req.clone({
        setHeaders: {
          Authorization: this.token
        }
      })
      return next.handle(reqPost)
    }
  }
}
