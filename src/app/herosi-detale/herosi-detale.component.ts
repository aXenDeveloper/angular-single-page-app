import { Component, Input, OnInit } from '@angular/core';
import { Heros } from '../heros';

@Component({
  selector: 'app-herosi-detale',
  templateUrl: './herosi-detale.component.html',
  styleUrls: ['./herosi-detale.component.scss']
})
export class HerosiDetaleComponent implements OnInit {
  @Input() heros: Heros;
  
  constructor() { }

  ngOnInit(): void {
  }

}
