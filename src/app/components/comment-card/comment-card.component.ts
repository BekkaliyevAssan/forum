import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {
  @Input() comment
  userList = []
  constructor() { 
    this.userList = JSON.parse(localStorage.getItem('userList')) || []
  }
  
  ngOnInit(): void {
  }

}
