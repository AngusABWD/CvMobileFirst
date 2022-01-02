import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carreau',
  templateUrl: './carreau.component.html',
  styleUrls: ['./carreau.component.scss']
})
export class CarreauComponent implements OnInit {

  savoirToutShowActive1: boolean = false;
  savoirToutShowActive2: boolean = false;
  savoirToutShowActive3: boolean = false;
  savoirToutShowActive4: boolean = false;
  savoirToutShowActive5: boolean = false;
  savoirTout: boolean = true;
  savoirToutActive1: boolean = true;
  savoirToutActive2: boolean = true;
  savoirToutActive3: boolean = true;
  savoirToutActive4: boolean = true;
  savoirToutActive5: boolean = true;
  rotateSavoirTout: any = undefined;
  rotateSavoirToutActive1: any = undefined;
  rotateSavoirToutActive2: any = undefined;
  rotateSavoirToutActive3: any = undefined;
  rotateSavoirToutActive4: any = undefined;
  rotateSavoirToutActive5: any = undefined;
  savoirToutMenu: boolean = false;
  savoirToutMenuActive1: boolean = true;
  savoirToutMenuActive2: boolean = true;
  savoirToutMenuActive3: boolean = true;
  savoirToutMenuActive4: boolean = true;
  savoirToutMenuActive5: boolean = true;

  constructor() { }

  ngOnInit(): void {

  }
  tabShow: Array<boolean> = [this.savoirToutShowActive1, this.savoirToutShowActive2, this.savoirToutShowActive3, this.savoirToutShowActive4, this.savoirToutShowActive5];
  tabMenu: Array<boolean> = [this.savoirToutMenuActive1, this.savoirToutMenuActive2, this.savoirToutMenuActive3, this.savoirToutMenuActive4, this.savoirToutMenuActive5];
  tabActive: Array<boolean> = [this.savoirToutActive1, this.savoirToutActive2, this.savoirToutActive3, this.savoirToutActive4, this.savoirToutActive5];
  tabRotate: Array<any> = [this.rotateSavoirToutActive1, this.rotateSavoirToutActive2, this.rotateSavoirToutActive3, this.rotateSavoirToutActive4,  this.rotateSavoirToutActive5];
  savoirToutActiveTrue() {
    for ( let i = 0; i < this.tabActive.length; i ++ ){
      this.tabActive[i] = true;
    }
  }
  rotateSavoirToutActiveTrue() {
    for ( let i = 0; i < this.tabRotate.length; i ++ ){
      this.tabRotate[i] = true;
    }
  }
  toogleSavoirToutActiveEtRotate() {
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
  onSavoirTout() {
  
    if ( this.savoirTout ) {
    this.rotateSavoirTout = false;
    this.savoirTout = false;
    this.savoirToutActiveTrue();
    setTimeout(()=>{
    this.savoirToutMenu = true }, 500);
    this.showCardWithDelay();
    setTimeout(()=>{
      this.rotateSavoirTout = undefined }, 1000);
    }
    else {
      this.rotateSavoirTout = true;
      this.savoirTout = true;
      this.toogleSavoirToutActiveEtRotate();
      setTimeout(()=>{
      this.savoirToutMenu = false }, 500);
      setTimeout(()=>{
      this.rotateSavoirToutActiveTrue() }, 500);
      this.hideCard();
      setTimeout(()=>{
        this.rotateSavoirTout = undefined }, 1000);
    }
  }
  onSavoirToutActive1() {
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
  onSavoirToutActive2() {
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
  onSavoirToutActive3() {
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
  onSavoirToutActive4() {
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
  onSavoirToutActive5() {
    if ( this.tabActive[4] ) {
    this.tabActive[4] = false;
    this.tabRotate[4] = false;  
    setTimeout(()=>{
    this.tabMenu[4] = true; }, 500);
    }
    else {
      this.tabActive[4] = true;
      this.tabRotate[4] = true;
      setTimeout(()=>{
      this.tabMenu[4] = false }, 500);
    }
  }
}
