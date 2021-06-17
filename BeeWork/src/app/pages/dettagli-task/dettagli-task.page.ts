import { Component, OnInit } from '@angular/core';
import {ActionSheetController } from '@ionic/angular';
import {Router} from '@angular/router';


@Component({
  selector: 'app-dettagli-task',
  templateUrl: './dettagli-task.page.html',
  styleUrls: ['./dettagli-task.page.scss'],
})
export class DettagliTaskPage implements OnInit {
  myVal = '';
  myVal1 = '';

  constructor(public actionsheetCtrl: ActionSheetController, private router: Router) { }


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
            this.router.navigateByUrl('profilo-membro');
          }
        }
      ]
    });
    await actionSheet.present();
  }


}
