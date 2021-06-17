import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {ProgettiService} from '../../../../services/progetti.service';
import {Observable, Subscription} from 'rxjs';
import {Progetto} from '../../../../model/progetto.model';

@Component({
  selector: 'app-dettaglio-progetto',
  templateUrl: './dettaglio-progetto.component.html',
  styleUrls: ['./dettaglio-progetto.component.scss'],
})
export class DettaglioProgettoComponent implements OnInit {

  progetto$: Observable<Progetto>;
  progettoId: number;
  // Dependency injection
  constructor(
    public actionsheetCtrl: ActionSheetController,
    private router: Router,
    private progettiService: ProgettiService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.progettoId = this.activatedRoute.snapshot.params.id;
    this.progetto$ = this.progettiService.getProgetto(this.progettoId);
  }

  eliminaUtente(id: number) {
    // elimina utente
  }

  apriProfilo(id: number) {
    this.router.navigate(['/profilo-membro/', id]);
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
            this.router.navigateByUrl('profilo-membro');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  // Passare il progetto messo in un attributo (dopo aver messo i dati nell'html) al delete del progettiService
  eliminaProgetto(id: number) {
    this.progettiService.deleteProgetto(id).subscribe(() => {
      this.router.navigateByUrl('/progetti');
    });
  }
}
