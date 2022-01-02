import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvService {
    creditsShow: boolean = false;
    opacite: number = 0;
    element: any = document.getElementById('credits');


    onCredits() {
    if (this.creditsShow) {
        this.creditsShow = false;
        } else {
            this.creditsShow = true;
        }
        
    }
    fade() {//fonction utilitaire permettant un affichage progressif a l'allumage
        setTimeout(  () => {  
            this.element.style.opacity = this.opacite*0.025;
            this.opacite++;
            if ( this.opacite<41 ) {
                this.fade();
            }
        },50)
    }
}
