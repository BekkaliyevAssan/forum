import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private userService: UserService) { 
  }

  ngOnInit(): void {
  }
  get user() {
    return this.userService.isAuthorized
  }

  get personalInfo() {
    return this.userService.personalInfo
  }

  logout() {
    this.userService.onLogout()
  }

}
