import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  ngOnInit(): void {
  }
  onSubmit() {
    // console.log(this.loginForm.value)
    this.userService.logIn(this.loginForm.value).subscribe(res => {
      if(res) {
        localStorage.setItem('user', JSON.stringify(res))
        
        this.userService.isAuthorizedChange.next(res)
        this.router.navigate([''])
      }
    })
  }

}
