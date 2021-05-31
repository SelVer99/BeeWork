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
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Aggiungi Progetto',
      url: '/aggiungi-progetto',
      icon: 'add-outline'
    },
    {
      title: 'Progetto',
      url: '/progetto',
      icon: 'hammer-outline'
    },
    {
      title: 'Impostazioni',
      url: '/impostazioni',
      icon: 'settings-outline'
    }
  ];
}
