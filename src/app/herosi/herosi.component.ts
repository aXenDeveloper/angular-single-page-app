import { Component, OnInit } from '@angular/core';
import { Heros } from '../heros';
import { HEROSI } from '../makieta-herosow';
 

@Component({
  selector: 'app-herosi',
  templateUrl: './herosi.component.html',
  styleUrls: ['./herosi.component.scss']
})
export class HerosiComponent implements OnInit {
  herosi = HEROSI;
  wybranyHeros: Heros;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(heros: Heros): void{
    this.wybranyHeros=heros;
  }

}
