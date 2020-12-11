import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Heros } from './heros';

@Injectable({
    providedIn: 'root'
})

export class herosiService{
private dbPath ='/';

ludzieRef: AngularFireList<Heros>=null;

    constructor(private db: AngularFireDatabase){
        this.ludzieRef = db.list(this.dbPath);
      }

    getAll(): AngularFireList<Heros> {
        return this.ludzieRef;
    }       
}