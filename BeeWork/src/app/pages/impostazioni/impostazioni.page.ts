import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impostazioni',
  templateUrl: './impostazioni.page.html',
  styleUrls: ['./impostazioni.page.scss'],
})
export class ImpostazioniPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleTheme(event) {
    if (event.detail.checked) {
      document.body.setAttribute('color-theme','dark');
    }
    else {
      document.body.setAttribute('color-theme','light');
    }
  }
}
