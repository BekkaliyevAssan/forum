import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { _url } from '../../assets/env'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = _url
  isAuthorized  
  isAuthorizedChange: Subject<any> = new Subject<any>() 

  personalInfo
  personalInfoChange: Subject<any> = new Subject<any>()
  constructor(private http: HttpClient, private router: Router) { 
    this.isAuthorizedChange.subscribe((value) => {
      this.isAuthorized = value
    })
    this.personalInfoChange.subscribe((data) => {
      this.personalInfo = data
    })

    let token = JSON.parse(localStorage.getItem('user')) || null
    if(token) this.isAuthorized = token
    let personalInfo = JSON.parse(localStorage.getItem('userInfo'))
    if(personalInfo) this.personalInfo = personalInfo
  }

  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getToken() {
    let user = JSON.parse(localStorage.getItem('user'))
    if(user)
    return user.access_token
    else return 'hello'
  }

  logIn(user):Observable<any> {
    return this.http.post(this.url + '/sign-in', user, this.httpHeaders)
  }

  register(user):Observable<any> {
    return this.http.post(this.url + '/users', user, this.httpHeaders)
  }

  getUsers():Observable<any> {
    return this.http.get(this.url + '/users')
  }

  getUser(id):Observable<any> {
    return this.http.get(this.url + '/users/' + id)
  }
  
  getCurrentUserInfo(id):Observable<any> {
    return this.http.get(this.url + '/users/' + id)
  }

  onLogout() {
    localStorage.removeItem('user')
    localStorage.removeItem('userInfo')

    this.isAuthorizedChange.next(null)
    this.personalInfoChange.next(null)

    this.router.navigate(['/login'])
  }

  getPosts():Observable<any> {
    return this.http.get(this.url + '/posts/')
  }

  getAlbums(id): Observable<any> {
    return this.http.get(this.url + '/users/' + id + '/albums')
  }





  hashCode(str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }
  intToRGB(i) {
    var c = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
  }
  getUserColor(string) {
    return this.intToRGB(this.hashCode(string))
  }
}
