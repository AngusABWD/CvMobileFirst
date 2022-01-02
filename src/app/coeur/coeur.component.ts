import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coeur',
  templateUrl: './coeur.component.html',
  styleUrls: ['./coeur.component.scss']
})
export class CoeurComponent implements OnInit {

  savoirEtreShowActive1: boolean = false;
  savoirEtreShowActive2: boolean = false;
  savoirEtreShowActive3: boolean = false;
  savoirEtreShowActive4: boolean = false;
  savoirEtre: boolean = true;
  savoirEtreActive1: boolean = true;
  savoirEtreActive2: boolean = true;
  savoirEtreActive3: boolean = true;
  savoirEtreActive4: boolean = true;
  rotateSavoirEtre: any = undefined;
  rotateSavoirEtreActive1: any = undefined;
  rotateSavoirEtreActive2: any = undefined;
  rotateSavoirEtreActive3: any = undefined;
  rotateSavoirEtreActive4: any = undefined;
  savoirEtreMenu: boolean = false;
  savoirEtreMenuActive1: boolean = true;
  savoirEtreMenuActive2: boolean = true;
  savoirEtreMenuActive3: boolean = true;
  savoirEtreMenuActive4: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  tabShow: Array<boolean> = [this.savoirEtreShowActive1, this.savoirEtreShowActive2, this.savoirEtreShowActive3, this.savoirEtreShowActive4];
  tabMenu: Array<boolean> = [this.savoirEtreMenuActive1, this.savoirEtreMenuActive2, this.savoirEtreMenuActive3, this.savoirEtreMenuActive4];
  tabActive: Array<boolean> = [this.savoirEtreActive1, this.savoirEtreActive2, this.savoirEtreActive3, this.savoirEtreActive4];
  tabRotate: Array<any> = [this.rotateSavoirEtreActive1, this.rotateSavoirEtreActive2, this.rotateSavoirEtreActive3, this.rotateSavoirEtreActive4];
  savoirEtreActiveTrue() {
    for ( let i = 0; i < this.tabActive.length; i ++ ){
      this.tabActive[i] = true;
    }
  }
  rotateSavoirEtreActiveTrue() {
    for ( let i = 0; i < this.tabRotate.length; i ++ ){
      this.tabRotate[i] = true;
    }
  }
  toogleSavoirEtreActiveEtRotate() {
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
  onSavoirEtre() {
    if ( this.savoirEtre ) {
    this.rotateSavoirEtre = false;
    this.savoirEtre = false;
    this.savoirEtreActiveTrue();
    setTimeout(()=>{
    this.savoirEtreMenu = true }, 500);
    this.showCardWithDelay();
    setTimeout(()=>{
      this.rotateSavoirEtre = undefined }, 1000);
    }
    else {
      this.rotateSavoirEtre = true;
      this.savoirEtre = true;
      this.toogleSavoirEtreActiveEtRotate();
      setTimeout(()=>{
      this.savoirEtreMenu = false }, 500);
      setTimeout(()=>{
      this.rotateSavoirEtreActiveTrue() }, 500);
      this.hideCard();
      setTimeout(()=>{
        this.rotateSavoirEtre = undefined }, 1000);
    }
  }
  onSavoirEtreActive1() {
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
  onSavoirEtreActive2() {
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
  onSavoirEtreActive3() {
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
  onSavoirEtreActive4() {
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
