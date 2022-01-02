import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-trefle',
  templateUrl: './trefle.component.html',
  styleUrls: ['./trefle.component.scss']
})

export class TrefleComponent implements OnInit {

  savoirFaireShowActive1: boolean = false;
  savoirFaireShowActive2: boolean = false;
  savoirFaireShowActive3: boolean = false;
  savoirFaireShowActive4: boolean = false;
  savoirFaire: boolean = true;
  savoirFaireActive1: boolean = true;
  savoirFaireActive2: boolean = true;
  savoirFaireActive3: boolean = true;
  savoirFaireActive4: boolean = true;
  rotateSavoirFaire: any = undefined;
  rotateSavoirFaireActive1: any = undefined;
  rotateSavoirFaireActive2: any = undefined;
  rotateSavoirFaireActive3: any = undefined;
  rotateSavoirFaireActive4: any = undefined;
  savoirFaireMenu: boolean = false;
  savoirFaireMenuActive1: boolean = true;
  savoirFaireMenuActive2: boolean = true;
  savoirFaireMenuActive3: boolean = true;
  savoirFaireMenuActive4: boolean = true;
 

  constructor() { }

  ngOnInit(): void {
  }

  tabShow: Array<boolean> = [this.savoirFaireShowActive1, this.savoirFaireShowActive2, this.savoirFaireShowActive3, this.savoirFaireShowActive4];
  tabMenu: Array<boolean> = [this.savoirFaireMenuActive1, this.savoirFaireMenuActive2, this.savoirFaireMenuActive3, this.savoirFaireMenuActive4];
  tabActive: Array<boolean> = [this.savoirFaireActive1, this.savoirFaireActive2, this.savoirFaireActive3, this.savoirFaireActive4];
  tabRotate: Array<any> = [this.rotateSavoirFaireActive1, this.rotateSavoirFaireActive2, this.rotateSavoirFaireActive3, this.rotateSavoirFaireActive4];

  savoirFaireActiveTrue() {
    for ( let i = 0; i < this.tabActive.length; i ++ ){
      this.tabActive[i] = true;
    }
  }
  rotateSavoirFaireActiveTrue() {
    for ( let i = 0; i < this.tabRotate.length; i ++ ){
      this.tabRotate[i] = true;
    }
  }
  toogleSavoirFaireActiveEtRotate() {
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
  onSavoirFaire() {
    if ( this.savoirFaire ) {
    this.rotateSavoirFaire = false;
    this.savoirFaire = false;
    this.savoirFaireActiveTrue();
    setTimeout(()=>{
    this.savoirFaireMenu = true }, 500);
    this.showCardWithDelay();
    setTimeout(()=>{
      this.rotateSavoirFaire = undefined }, 1000);
    }
    else {
      this.rotateSavoirFaire = true;
      this.savoirFaire = true;
      this.toogleSavoirFaireActiveEtRotate();
      setTimeout(()=>{
      this.savoirFaireMenu = false }, 500);
      setTimeout(()=>{
      this.rotateSavoirFaireActiveTrue() }, 500);
      this.hideCard();
      setTimeout(()=>{
        this.rotateSavoirFaire = undefined }, 1000);
    }
  }
  onSavoirFaireActive1() {
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
  onSavoirFaireActive2() {
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
  onSavoirFaireActive3() {
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
  onSavoirFaireActive4() {
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
