import { Component, OnInit } from '@angular/core';

import {TemaService} from '../../services/tema.service';
import {TranslateService} from '@ngx-translate/core';
import {Lingua, LinguaService} from '../../services/lingua.service';

@Component({
  selector: 'app-impostazioni',
  templateUrl: './impostazioni.page.html',
  styleUrls: ['./impostazioni.page.scss'],
})
export class ImpostazioniPage implements OnInit {
  public language: string;

  constructor(private temaService: TemaService,
              private translate: TranslateService,
              private linguaService: LinguaService) {
  }

  ngOnInit() {
  }

  toggleTheme(event) {
    if (event.detail.checked) {
      document.body.setAttribute('color-theme','dark');
      this.temaService.updateTema('dark');
    } else {
      document.body.setAttribute('color-theme','light');
      this.temaService.updateTema('light');
    }
  }

  toggleNotifications(event) {
    if (event.detail.checked) {
      console.log(event);
    }
  }

  english() {
    const linguaPreferita = this.linguaService.getLingue()[1].valore;
    this.translate.setDefaultLang(linguaPreferita);
    this.linguaService.getLinguaAttuale().subscribe((lingua: string) => {
      if (lingua != linguaPreferita) {
        this.translate.use(linguaPreferita);
        this.linguaService.updateLingua(linguaPreferita);
      }
    });
  }

  italiano() {
    const linguaPreferita = this.linguaService.getLingue()[0].valore;
    this.translate.setDefaultLang(linguaPreferita);
    this.linguaService.getLinguaAttuale().subscribe((lingua: string) => {
      if (lingua != linguaPreferita) {
        this.translate.use(linguaPreferita);
        this.linguaService.updateLingua(linguaPreferita);
      }
    });
  }
}
