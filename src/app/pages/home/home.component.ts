import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public posts
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPosts().subscribe(data => {
      this.posts = data
      console.log(data)
    })
  }

}
