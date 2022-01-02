import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrefleComponent } from './trefle/trefle.component';
import { CoeurComponent } from './coeur/coeur.component';
import { PiqueComponent } from './pique/pique.component';
import { CarreauComponent } from './carreau/carreau.component';
import { CreditsComponent } from './credits/credits.component';

@NgModule({
  declarations: [
    AppComponent,
    TrefleComponent,
    CoeurComponent,
    PiqueComponent,
    CarreauComponent,
    CreditsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
