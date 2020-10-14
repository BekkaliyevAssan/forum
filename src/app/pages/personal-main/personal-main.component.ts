import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-personal-main',
  templateUrl: './personal-main.component.html',
  styleUrls: ['./personal-main.component.css']
})
export class PersonalMainComponent implements OnInit {
  personalPosts
  personalAlbums
  user
  currentUserId
  loading: boolean = true
  constructor(private userService: UserService, private route: ActivatedRoute) { 
    this.currentUserId = this.route.snapshot.paramMap.get('id')
    let userList = JSON.parse(localStorage.getItem('userList')) || []
      this.user = userList.find(o => o.id == this.currentUserId)
  }

  ngOnInit(): void {
    this.userService.getPosts().subscribe(data => {
      setTimeout(() => {
        this.personalPosts = data.filter(o => o.userId == this.currentUserId)
        this.loading = false
      }, 200)
    })

    this.userService.getAlbums(this.currentUserId).subscribe(data => {
      this.personalAlbums = data
    })
  }

}
