import { Component } from '@angular/core';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Andermann Boris CV';
  collapseMenu: boolean = true;
  savoirFaireShow: boolean = false;
  savoirEtreShow: boolean = false;
  savoirShow: boolean = false;
  toutSavoirShow: boolean = false;
  creditsShow: boolean = false;
  rotateCredits: any = undefined;
  cvPopup: any = undefined;
  fade: boolean = false;

  constructor() { 
  }

  ngOnInit(): void {
    this.fade = true;
  }
  // Fonction utilitaires pour afficher le menu ou des éléments
  onCollapse() {
    this.collapseMenu = !this.collapseMenu;
  }
  // Affichage type fondu du Menu Trefle pour mobile
  onSavoirFaireShow() {
    if (this.savoirFaireShow) {
    this.savoirFaireShow = this.savoirFaireShow;
    } else {
      this.savoirFaireShow = !this.savoirFaireShow;
      this.savoirEtreShow = false;
      this.savoirShow = false;
      this.toutSavoirShow = false;
      this.creditsShow = false;
    }
  }
  // Affichage type fondu du Menu Coeur pour mobile
  onSavoirEtreShow() {
    if (this.savoirEtreShow) {
    this.savoirEtreShow = this.savoirEtreShow;
    } else {
      this.savoirEtreShow = !this.savoirEtreShow;
      this.savoirFaireShow = false;
      this.savoirShow = false;
      this.toutSavoirShow = false;
      this.creditsShow = false;
    }
  }
  // Affichage type fondu du Menu Pique pour mobile
  onSavoirShow() {
    if (this.savoirShow) {
    this.savoirShow = this.savoirShow;
    } else {
      this.savoirShow = !this.savoirShow;
      this.savoirFaireShow = false;
      this.savoirEtreShow = false;
      this.toutSavoirShow = false;
      this.creditsShow = false;
    }
  }
    // Affichage type fondu du Menu Pique pour mobile
    onToutSavoirShow() {
      if (this.toutSavoirShow) {
      this.toutSavoirShow = this.toutSavoirShow;
      } else {
        this.toutSavoirShow = !this.toutSavoirShow;
        this.savoirFaireShow = false;
        this.savoirEtreShow = false;
        this.savoirShow = false;
        this.creditsShow = false;
      }
    }
    onCredits() {
      if (this.creditsShow) {
        this.creditsShow = false;
        } else {
          this.creditsShow = true;
          this.savoirFaireShow = false;
          this.savoirEtreShow = false;
          this.savoirShow = false;
          this.toutSavoirShow = false;
        }
    }
    onPrint() {
      this.cvPopup = window.open("/assets/CV_2022-09-30_BORIS_ANDERMANN.pdf", "CV", "popup");
      this.cvPopup.focus();
      this.cvPopup.print();
    }
}
