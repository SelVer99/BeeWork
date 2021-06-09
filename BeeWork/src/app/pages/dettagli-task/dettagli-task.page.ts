import { Component, OnInit } from '@angular/core';
import {ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-dettagli-task',
  templateUrl: './dettagli-task.page.html',
  styleUrls: ['./dettagli-task.page.scss'],
})
export class DettagliTaskPage implements OnInit {
  myVal = '';
  myVal1 = '';

  constructor(public actionsheetCtrl: ActionSheetController) { }


  ngOnInit() {
  }


  submit(){
    this.myVal1 = this.myVal;
    this.myVal='';
  }

  async openMenu() {
    const actionSheet = await this.actionsheetCtrl.create({
      header: 'nome membro',
      mode: 'ios',
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
