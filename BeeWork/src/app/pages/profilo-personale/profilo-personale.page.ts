import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilo-personale',
  templateUrl: './profilo-personale.page.html',
  styleUrls: ['./profilo-personale.page.scss'],
})
export class ProfiloPersonalePage implements OnInit {

  bio = 'Paul Yeboah (born 4 August 1992), known as Bello FiGo, is a Ghanaian YouTuber and singer known in Italy for his\n' +
    '        numerous songs in which he often parodies different topics like racism, sexism and politics that often caused\n' +
    '        controversy and debate in Italy about his social, political and cultural role because of the way he talks about these topics.';

  isVisible = false;

  constructor() { }

  ngOnInit() {
  }

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

}
