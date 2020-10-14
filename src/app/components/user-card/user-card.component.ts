import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user
  userColor: string
  constructor(private userService: UserService) { 

  }

  ngOnInit(): void {
    this.userColor = this.userService.getUserColor(this.user.name)
  }

  

}
