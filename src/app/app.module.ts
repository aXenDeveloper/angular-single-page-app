import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HerosiComponent } from './herosi/herosi.component';
import { FormsModule } from '@angular/forms';
import { HerosiDetaleComponent } from './herosi-detale/herosi-detale.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosiComponent,
    HerosiDetaleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
