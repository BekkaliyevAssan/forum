import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  userId
  constructor(private postService: PostService, private fb: FormBuilder, private router: Router) { 
    this.userId = JSON.parse(localStorage.getItem('user')) || ''
  }
  post = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
    id: '',
    userId: ''
  })
  ngOnInit(): void {
  }

  onSubmit() {
    this.post.patchValue({
      userId: this.userId.userId
    })
    this.postService.setPost(this.post.value).subscribe(res => {
      this.router.navigate(['personal', this.userId.userId])
    })
  }

  onEnterKey(event) {
    if (event.keyCode === 13) this.onSubmit()
  }

}
