import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string
  constructor(private userService: UserService) { 
    // this.username = this.user.username
  }

  ngOnInit(): void {
  }

  get user() {
    return this.userService.isAuthorized
  }

}
