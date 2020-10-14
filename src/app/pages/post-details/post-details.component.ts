import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  id
  post
  author
  postComments
  currentUser
  loading: boolean = true
  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) { 
    this.id = this.route.snapshot.paramMap.get('post-id')

    this.currentUser = JSON.parse(localStorage.getItem('user')).userId
  }

  ngOnInit(): void {
    this.postService.getPostDetails(this.id).subscribe(post => {
      this.post = post
      this.loading = false
      console.log(this.post)

      let userList = JSON.parse(localStorage.getItem('userList')) || []
      this.author = userList.find(o => o.id == this.post.userId)
    })

    this.postService.getCurrentComments(this.id).subscribe(comments => {
      this.postComments = comments
    })
  }

  onPostDelete(postId) {
    this.postService.deletePost(postId).subscribe(res => {
      this.router.navigate(['personal', this.currentUser])
    })
  }

}
