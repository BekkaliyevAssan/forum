import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { _url } from '../../assets/env'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = _url
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getPostDetails(postId):Observable<any> {
    return this.http.get(this.url + '/posts/' + postId)
  }
  getCurrentComments(postId):Observable<any> {
    return this.http.get(this.url + '/posts/' + postId + '/comments')
  }
  setPost(post):Observable<any> {
    return this.http.post(this.url + '/posts', post, this.httpHeaders)
  }
  deletePost(postId):Observable<any> {
    return this.http.delete(this.url + '/posts/' + postId)
  }
  
} 
