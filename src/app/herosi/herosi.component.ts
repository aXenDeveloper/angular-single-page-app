import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/database';
import { Heros } from '../heros';
import { herosiService } from '../herosi.service';
import { HEROSI } from '../makieta-herosow';
import { map } from 'rxjs/operators'; 

@Component({
  selector: 'app-herosi',
  templateUrl: './herosi.component.html',
  styleUrls: ['./herosi.component.scss']
})
export class HerosiComponent implements OnInit {
  herosi: any;// = HEROSI;
  wybranyHeros: Heros;
  constructor(private heroiS: herosiService) { }

  ngOnInit(): void {
    this.sluchaj();

  }

  onSelect(heros: Heros): void{
   // this.wybranyHeros=heros;
  }

  sluchaj(): void{
    this.heroiS.getAll().snapshotChanges().pipe(
      map(changes => changes.map(c =>
        ({key: c.payload.key, ...c.payload.val()})
        )
        )
    ).subscribe(data=> {
      this.herosi=data;
      })
  }

}
