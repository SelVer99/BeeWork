import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-initials-avatar',
  templateUrl: './user-initials-avatar.component.html',
  styleUrls: ['./user-initials-avatar.component.scss'],
})
export class UserInitialsAvatarComponent implements OnInit {

  @Input('utente') utente;
  
  constructor() { }

  ngOnInit() {
   
  }

}
