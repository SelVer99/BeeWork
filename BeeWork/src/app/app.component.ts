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
      title: 'Profilo Personale',
      url: '/profilo-personale',
      icon: 'person-circle-outline'
    },
    {
      title: 'Progetti/Task Personali',
      url: '/progetti-task-personali',
      icon: 'hammer-outline'
    },
    {
      title: 'Calendario',
      url: '/calendario',
      icon: 'calendar-number-outline'
    },
    {
      title: 'Impostazioni',
      url: '/impostazioni',
      icon: 'settings-outline'
    },
    {
      title: 'Log Out',
      url: '/login',
      icon: 'log-out-outline'
    }
  ];
}
