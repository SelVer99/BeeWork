import { Component, OnInit } from '@angular/core';
import {ActionSheetController } from '@ionic/angular';
import {Router} from '@angular/router';
import {ProgettiService} from '../../services/progetti.service';

@Component({
  selector: 'app-progetto',
  templateUrl: './progetto.page.html',
  styleUrls: ['./progetto.page.scss'],
})
export class ProgettoPage implements OnInit {


  constructor(
    public actionsheetCtrl: ActionSheetController,
    private router: Router,
    private progettiService: ProgettiService) { }

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
            this.router.navigateByUrl('profilo-membro');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  // Passare il progetto messo in un attributo (dopo aver messo i dati nell'html) al delete del progettiService
  eliminaProgetto() {}
}
