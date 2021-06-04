import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dettagli-task',
  templateUrl: './dettagli-task.page.html',
  styleUrls: ['./dettagli-task.page.scss'],
})
export class DettagliTaskPage implements OnInit {
  myVal = '';
  myVal1 = '';

  constructor() { }


  ngOnInit() {
  }

  submit(){
    this.myVal1 = this.myVal;
    this.myVal='';
  }


}
