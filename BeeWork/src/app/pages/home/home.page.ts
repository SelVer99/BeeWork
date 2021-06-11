import {Component, OnInit} from '@angular/core';
import {ProgettiService} from "../../services/progetti.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  progetti$: Observable<any>;

  constructor(private progettiService: ProgettiService) {}

  ngOnInit(): void {
    this.progetti$ = this.progettiService.getProgetti();
  }


}
