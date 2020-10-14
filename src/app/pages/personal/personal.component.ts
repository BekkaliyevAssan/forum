import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  user
  userColor
  constructor(private userService: UserService, private cdr: ChangeDetectorRef) {
    this.user = this.userService.personalInfo
  }

  ngOnInit(): void {
    this.userColor = this.userService.getUserColor(this.user.name)
  }

  onRedirect(site) {
    document.location.href = `https://${site}`
  }
  contentWidth
  @ViewChild('content') elementView: ElementRef;

  ngAfterViewInit() {
    this.contentWidth = this.elementView.nativeElement.offsetWidth;
    this.cdr.detectChanges()
  }
}
