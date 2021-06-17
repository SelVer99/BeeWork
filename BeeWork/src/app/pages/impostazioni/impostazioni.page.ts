import { Component, OnInit } from '@angular/core';

import { TemaService } from '../../services/tema.service';
import { TranslateService } from '@ngx-translate/core';
import { LinguaService } from '../../services/lingua.service';
import { NotificheService } from '../../services/notifiche.service';

@Component({
  selector: 'app-impostazioni',
  templateUrl: './impostazioni.page.html',
  styleUrls: ['./impostazioni.page.scss'],
})
export class ImpostazioniPage implements OnInit {
  private dark = false;
  private notify = true;

  constructor(private temaService: TemaService,
              private translate: TranslateService,
              private linguaService: LinguaService,
              private notificheService: NotificheService) {
  }

  ngOnInit() {
  }

  // Scelta del tema
  toggleTheme(event) {
    if (event.detail.checked) {
      document.body.setAttribute('color-theme','dark');
      this.temaService.updateTema('dark');
      this.dark = true;
    } else {
      document.body.setAttribute('color-theme','light');
      this.temaService.updateTema('light');
    }
  }

  // Scelta sulla ricezione delle notifiche
  toggleNotifications(event) {
    if (event.detail.checked) {
      this.notificheService.updateNotifiche('on');
      this.notify = true;
    } else {
      this.notificheService.updateNotifiche('off');
      this.notify = false;
    }
  }

  // Scelta sulla lingua
  english() {
    const linguaPreferita = this.linguaService.getLingue()[1].valore;
    this.translate.setDefaultLang(linguaPreferita);
    this.linguaService.getLinguaAttuale().subscribe((lingua: string) => {
      if (lingua !== linguaPreferita) {
        this.translate.use(linguaPreferita);
        this.linguaService.updateLingua(linguaPreferita);
      }
    });
  }

  italiano() {
    const linguaPreferita = this.linguaService.getLingue()[0].valore;
    this.translate.setDefaultLang(linguaPreferita);
    this.linguaService.getLinguaAttuale().subscribe((lingua: string) => {
      if (lingua !== linguaPreferita) {
        this.translate.use(linguaPreferita);
        this.linguaService.updateLingua(linguaPreferita);
      }
    });
  }
}
