import { Component, OnInit } from '@angular/core';
import {ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-progetto',
  templateUrl: './progetto.page.html',
  styleUrls: ['./progetto.page.scss'],
})
export class ProgettoPage implements OnInit {


  constructor(
    public actionsheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
  }
  async openMenu() {
    const actionSheet = await this.actionsheetCtrl.create({
      header: 'nome membro',
      mode: 'ios',
      cssClass:'opzioni',
      buttons: [
        {
          text: 'Rimuovi Membro',
          role: 'destructive',
          handler: () => {
            console.log('Rimuovi Membro clicked');
          }
        },{
          text: 'Visualizza Profilo',
          handler: () => {
            console.log('Visualizza Profilo clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }
}
