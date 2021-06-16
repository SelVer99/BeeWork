import {Component, OnInit} from '@angular/core';
import {ProgettiService} from '../../services/progetti.service';
import {Observable} from 'rxjs';
import {Storage} from '@ionic/storage';
import {AUTH_TOKEN} from '../../constants';
import {Progetto} from '../../model/progetto.model';
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  progetti$: Observable<any>;

  constructor(private progettiService: ProgettiService,
              private storage: Storage,
              private navController: NavController) {}

  ngOnInit(): void {
    this.progetti$ = this.progettiService.getProgetti();
  }

  /*apriProgetto(progetto: Progetto) {
    this.navController.navigateForward()
  } */
}
