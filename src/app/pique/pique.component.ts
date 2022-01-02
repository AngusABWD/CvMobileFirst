import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pique',
  templateUrl: './pique.component.html',
  styleUrls: ['./pique.component.scss']
})
export class PiqueComponent implements OnInit {
  
  savoirShowActive1: boolean = false;
  savoirShowActive2: boolean = false;
  savoirShowActive3: boolean = false;
  savoirShowActive4: boolean = false;
  savoir: boolean = true;
  savoirActive1: boolean = true;
  savoirActive2: boolean = true;
  savoirActive3: boolean = true;
  savoirActive4: boolean = true;
  rotateSavoir: any = undefined;
  rotateSavoirActive1: any = undefined;
  rotateSavoirActive2: any = undefined;
  rotateSavoirActive3: any = undefined;
  rotateSavoirActive4: any = undefined;
  savoirMenu: boolean = false;
  savoirMenuActive1: boolean = true;
  savoirMenuActive2: boolean = true;
  savoirMenuActive3: boolean = true;
  savoirMenuActive4: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  tabShow: Array<boolean> = [this.savoirShowActive1, this.savoirShowActive2, this.savoirShowActive3, this.savoirShowActive4];
  tabMenu: Array<boolean> = [this.savoirMenuActive1, this.savoirMenuActive2, this.savoirMenuActive3, this.savoirMenuActive4];
  tabActive: Array<boolean> = [this.savoirActive1, this.savoirActive2, this.savoirActive3, this.savoirActive4];
  tabRotate: Array<any> = [this.rotateSavoirActive1, this.rotateSavoirActive2, this.rotateSavoirActive3, this.rotateSavoirActive4];

  //Fonction intégrée permettant les affichages et rotations des cartes
  savoirActiveTrue() {
    for ( let i = 0; i < this.tabActive.length; i ++ ){
      this.tabActive[i] = true;
    }
  }
  rotateSavoirActiveTrue() {
    for ( let i = 0; i < this.tabRotate.length; i ++ ){
      this.tabRotate[i] = true;
    }
  }
  toogleSavoirActiveEtRotate() {
    for ( let i = 0; i < this.tabActive.length; i ++ ){
    if ( this.tabRotate[i] || this.tabRotate[i] === undefined) {
      this.tabRotate[i] = false;
      this.tabActive[i] = false; 
      } else {
      this.tabRotate[i] = true;
      this.tabActive[i] = true; 
      }
    }
  }
  showCardWithDelay() {
  for ( let i = 0; i < this.tabShow.length; i ++) { 
    setTimeout(()=> {
      this.tabShow[i] = true }, ((i) + 1)*500);
    setTimeout(()=> {
      this.tabMenu[i] = false }, (((i) + 1)*500) + 500 );
    }
  }
  hideCard() {
    for ( let i = 0; i < this.tabMenu.length; i ++ ) {
      setTimeout(()=>{
      this.tabShow[i] = false;
      this.tabMenu[i] = true;
      },500);
    }
  }
  //Rotations de la carte du menu et affichage des cartes matière
  onSavoir() {
    if ( this.savoir ) {
    this.rotateSavoir = false;
    this.savoir = false;
    this.savoirActiveTrue();
    setTimeout(()=>{
    this.savoirMenu = true }, 500);
    this.showCardWithDelay();
    setTimeout(()=>{
      this.rotateSavoir = undefined }, 1000);
    }
    else {
      this.rotateSavoir = true;
      this.savoir = true;
      this.toogleSavoirActiveEtRotate();
      setTimeout(()=>{
      this.savoirMenu = false }, 500);
      setTimeout(()=>{
      this.rotateSavoirActiveTrue() }, 500);
      this.hideCard();
      setTimeout(()=>{
        this.rotateSavoir = undefined }, 1000);
    }
  }
  //Rotation des cartes matières 1 2 3 et 4
  onSavoirActive1() {
    if ( this.tabActive[0] ) {
    this.tabActive[0] = false;
    this.tabRotate[0] = false;
    setTimeout(()=>{
    this.tabMenu[0] = true; }, 500);
    }
    else {
      this.tabActive[0] = true;
      this.tabRotate[0] = true;
      setTimeout(()=>{
      this.tabMenu[0] = false }, 500);
    }
  }
  onSavoirActive2() {
    if ( this.tabActive[1] ) {
    this.tabActive[1] = false;
    this.tabRotate[1] = false;  
    setTimeout(()=>{
    this.tabMenu[1] = true; }, 500);
    }
    else {
      this.tabActive[1] = true;
      this.tabRotate[1] = true;
      setTimeout(()=>{
      this.tabMenu[1] = false }, 500);
    }
  }
  onSavoirActive3() {
    if ( this.tabActive[2] ) {
    this.tabActive[2] = false;
    this.tabRotate[2] = false;  
    setTimeout(()=>{
    this.tabMenu[2] = true; }, 500);
    }
    else {
      this.tabActive[2] = true;
      this.tabRotate[2] = true;
      setTimeout(()=>{
      this.tabMenu[2] = false }, 500);
    }
  }
  onSavoirActive4() {
    if ( this.tabActive[3] ) {
    this.tabActive[3] = false;
    this.tabRotate[3] = false;  
    setTimeout(()=>{
    this.tabMenu[3] = true; }, 500);
    }
    else {
      this.tabActive[3] = true;
      this.tabRotate[3] = true;
      setTimeout(()=>{
      this.tabMenu[3] = false }, 500);
    }
  }
}
