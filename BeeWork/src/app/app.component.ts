import { Component } from '@angular/core';

import {NavController, Platform} from '@ionic/angular';
import {LinguaService} from './services/lingua.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private appPages = [
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


  constructor(private platform: Platform,
              private linguaService: LinguaService,
              private translate: TranslateService,
              private navController: NavController) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.initTranslate();
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    const linguaPreferita = this.linguaService.getLinguaPreferita();
    this.translate.setDefaultLang(linguaPreferita);
    this.linguaService.getLinguaAttuale().subscribe((lingua: string) => {
      if (lingua != null) {
        this.translate.use(lingua);
      } else {
        this.translate.use(linguaPreferita);
        this.linguaService.updateLingua(linguaPreferita);
      }
    });
  }
}
