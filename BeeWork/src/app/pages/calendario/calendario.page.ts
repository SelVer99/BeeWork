import { Component, OnInit } from '@angular/core';

import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
  dateRange: { from: string; to: string; };

  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'

  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };

  constructor() { }

  ngOnInit() {
  }

}
