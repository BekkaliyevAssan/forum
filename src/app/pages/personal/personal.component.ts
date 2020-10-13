import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  user
  constructor(private userService: UserService) { 
    this.user = this.userService.personalInfo
  }

  ngOnInit(): void {
  }

  onRedirect(site) {
    document.location.href = `https://${site}`
  }

}
