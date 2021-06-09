import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progetto',
  templateUrl: './progetto.page.html',
  styleUrls: ['./progetto.page.scss'],
})
export class ProgettoPage implements OnInit {
  members = [
    'fla',
    'mo',
    'angelo',
    'selene',
    'bob'
  ];

  constructor() { }

  ngOnInit() {
  }

}
