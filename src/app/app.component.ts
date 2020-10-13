import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forum';
  constructor(private userUservice: UserService) {
    this.userUservice.getUsers().subscribe(data =>
      localStorage.setItem('userList', JSON.stringify(data))
    )
  }
}
