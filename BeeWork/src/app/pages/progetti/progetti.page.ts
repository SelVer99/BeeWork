import { Component} from '@angular/core';
import {Observable} from 'rxjs';
import {ProgettiService} from '../../services/progetti.service';
import {Progetto} from '../../model/progetto.model';
import {ViewWillEnter} from '@ionic/angular';
import {Router} from "@angular/router";

@Component({
  selector: 'app-progetti',
  templateUrl: './progetti.page.html',
  styleUrls: ['./progetti.page.scss']
})
export class ProgettiPage implements ViewWillEnter {

  progetti$: Observable<Progetto>;

  constructor(private progettiService: ProgettiService, private router: Router) { }


  ionViewWillEnter(): void {
    this.progetti$ = this.progettiService.getProgetti();
  }

  eliminaProgetto(id: number) {
    this.progettiService.deleteProgetto(id).subscribe(() => {
      this.router.navigateByUrl('/progetti');
    });
  }

}
