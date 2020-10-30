import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Herosi } from '../mock-herosi';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  herosi = Herosi;
  constructor() { }

  ngOnInit(): void {
  }

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
}
