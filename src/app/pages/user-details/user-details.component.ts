import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user
  loading: boolean = true
  constructor(private route: ActivatedRoute, private userService: UserService) { }
  id = this.route.snapshot.paramMap.get('id')

  ngOnInit(): void {
    this.userService.getUser(this.id).subscribe(user => {
      setTimeout(() => {
        this.user = user
        this.loading = false
      }, 200)
      })
  }

  onRedirect(site) {
    document.location.href = `https://${site}`
  }

}
