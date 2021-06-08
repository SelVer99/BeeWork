import { Component } from '@angular/core';

import {NavController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {LinguaService} from './services/lingua.service';
import {TranslateService} from '@ngx-translate/core';
import {TemaService} from './services/tema.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private appPages = [
    {
      title: 'PROFILO_PERSONALE',
      url: '/profilo-personale',
      icon: 'person-circle-outline'
    },
    {
      title: 'PROGETTI_TASK_PERSONALI',
      url: '/progetti-task-personali',
      icon: 'hammer-outline'
    },
    {
      title: 'CALENDARIO',
      url: '/calendario',
      icon: 'calendar-number-outline'
    },
    {
      title: 'IMPOSTAZIONI',
      url: '/impostazioni',
      icon: 'settings-outline'
    },
    {
      title: 'LOGOUT',
      url: '/login',
      icon: 'log-out-outline'
    }
  ];


  constructor(private platform: Platform,
              private splashScreen: SplashScreen,
              private linguaService: LinguaService,
              private temaService: TemaService,
              private translate: TranslateService,
              private navController: NavController) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.initTranslate();
      this.initTheming();
    });
  }

  // Imposta la lingua di default per la traduzione e la lingua attuale.
  initTranslate() {
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

  // Imposta il tema di default.
  initTheming() {
    const temaPreferito = this.temaService.getTemaPreferito();
    document.body.setAttribute('color-theme',temaPreferito);
    this.temaService.getTemaAttuale().subscribe((tema: string) => {
      if (tema !== null) {
        document.body.setAttribute('color-theme', tema);
        this.temaService.updateTema(tema);
      }
      else {
        document.body.setAttribute('color-theme',temaPreferito);
        this.temaService.updateTema(temaPreferito);
      }
    });
  }
}
