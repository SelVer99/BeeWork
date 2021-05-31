import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  public appPages = [
    {
      title: 'Home',
      url: '/pages/home',
      icon: 'home'
    },
    {
      title: '',
      url: '/pages/aggiungi-progetto',
      icon: 'aggiungi-progetto'
    },
    {
      title: 'Impostazioni',
      url: '/pages/impostazioni',
      icon: 'impostazioni'
    }
  ];
}
