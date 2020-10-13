import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-personal-main',
  templateUrl: './personal-main.component.html',
  styleUrls: ['./personal-main.component.css']
})
export class PersonalMainComponent implements OnInit {
  personalPosts
  user
  loading: boolean = true
  constructor(private userService: UserService) { 
    this.user = this.userService.personalInfo
  }

  ngOnInit(): void {
    this.userService.getPosts().subscribe(data => {
      setTimeout(() => {
        this.personalPosts = data.filter(o => o.userId == this.user.id)
        this.loading = false
        console.log(this.personalPosts)
      }, 200)
    })
  }

}
