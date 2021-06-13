import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {NotificheService} from "../../services/notifiche.service";

@Component({
  selector: 'app-lista-notifiche',
  templateUrl: './lista-notifiche.page.html',
  styleUrls: ['./lista-notifiche.page.scss'],
})
export class ListaNotifichePage implements OnInit {

  notifiche$: Observable<any>;

  constructor(private notificheService: NotificheService) { }

  ngOnInit() {
    this.notifiche$ = this.notificheService.getNotifiche();
  }

}
