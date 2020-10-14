import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

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
  constructor(private route: ActivatedRoute, 
    private postService: PostService, private router: Router,
    private fb: FormBuilder,
    private userService: UserService
    ) { 
    this.id = this.route.snapshot.paramMap.get('post-id')

    this.currentUser = JSON.parse(localStorage.getItem('user')).userId
  }

  comment = this.fb.group({
    name: ['', Validators.required],
    body: ['', Validators.required],
    postId: '',
    id: '',
    email: ''
  })

  ngOnInit(): void {
    this.postService.getPostDetails(this.id).subscribe(post => {
      this.post = post
      this.loading = false
      console.log(this.post)

      let userList = JSON.parse(localStorage.getItem('userList')) || []
      this.author = userList.find(o => o.id == this.post.userId)
    })

    this.postService.refresh.subscribe(() => {
      this.getComments()
    })
    this.getComments()
  }

  getComments() {
    this.postService.getCurrentComments(this.id).subscribe(comments => {
      this.postComments = comments
    })
  }

  onPostDelete(postId) {
    this.postService.deletePost(postId).subscribe(res => {
      this.router.navigate(['personal', this.currentUser])
    })
  }

  addComment(postId) {
    let user = JSON.parse(localStorage.getItem('userInfo'))
    this.comment.patchValue({
      postId: postId,
      email: user.email
    })
    this.postService.addComment(this.comment.value, postId).subscribe(res => {
      console.log(res)
    })
    this.comment.reset()
  }

  onEnterKey(event, postId) {
    if (event.keyCode === 13) this.addComment(postId)
  }

}
