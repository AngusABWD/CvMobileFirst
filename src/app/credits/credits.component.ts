import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

  Credits: boolean = true;
  rotateCredits: any = undefined;
  CreditsMenu: boolean = false;
  
  constructor(private appComponent: AppComponent) { }

  ngOnInit(): void {
  }
  //Fonction de rotation
  onCredits() {
    if ( this.Credits ) {
    this.rotateCredits = false;
    this.Credits = false;
    setTimeout(()=>{
    this.CreditsMenu = true }, 500);
    setTimeout(()=>{
    this.rotateCredits = undefined }, 1000);
    }
    else {
      this.Credits = true;
      this.CreditsMenu = false;
      this.appComponent.onCredits();
    }
  }
}
