import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public posts
  public users

  currentUser
  constructor(private userService: UserService, private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('user'))
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data
      console.log(data)
    })
    this.userService.getPosts().subscribe(data => {
      this.posts = data
    })
  }

  onRedirect(userId, id) {
    if (this.currentUser.userId != userId)
      this.router.navigate(['user', userId, id])
    else if (this.currentUser.userId == userId)
      this.router.navigate(['personal', userId, id])
  }

  onUserRedirect(userId) {
    if (this.currentUser.userId != userId)
      this.router.navigate(['user', userId])
    else if (this.currentUser.userId == userId)
      this.router.navigate(['personal', userId])
  }

}
