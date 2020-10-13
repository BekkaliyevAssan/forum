import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { _url } from '../../assets/env'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = _url
  constructor(private http: HttpClient) { 
    this.isAuthorizedChange.subscribe((value) => {
      this.isAuthorized = value
    })

    let token = JSON.parse(localStorage.getItem('user')) || null
    if(token) this.isAuthorized = token
  }

  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  isAuthorized
  isAuthorizedChange: Subject<any> = new Subject<any>() 

  logIn(user):Observable<any> {
    return this.http.post(this.url + '/sign-in', user, this.httpHeaders)
  }

  getUsers():Observable<any> {
    return this.http.get(this.url + '/users')
  }
  
}
