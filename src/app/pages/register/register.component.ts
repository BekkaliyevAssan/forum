import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }

  regForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    address: this.fb.group({
      city: ['', Validators.required],
      street: ['', Validators.required]
    }),
    company: this.fb.group({
      name: ['', Validators.required]
    }),
    username: ['', Validators.required],
    password: ['', Validators.required],
    password2: ['', Validators.required],
    phone: ['', Validators.required],
    website: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  onEnterKey(event) {
    if (event.keyCode === 13) this.onSubmit()
  }
  
  onSubmit() {
    this.userService.register(this.regForm.value).subscribe(res => {
      if(res) {
        localStorage.setItem('user', JSON.stringify(res))
        this.userService.isAuthorizedChange.next(res)
        localStorage.setItem('userInfo', JSON.stringify(res))
        this.userService.personalInfoChange.next(res)
        this.router.navigate(['personal', res.id])
      }
    })
  }
}
