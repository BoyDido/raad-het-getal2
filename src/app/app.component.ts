import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title= 'Raad het getal'
      gokgetalString: string;
      randomNumber: number;
      gokBoodschap: string;
      beurten: number;
      controle: number;
      gokgetalNumber:number;
      controleNummer: number

      constructor(){
      this.gokBoodschap = this.gokBoodschap;
      this.startSpel();
      }

    startSpel(){
        this.beurten = 10;
        this.gokgetalString= ''; 
        this.randomNumber = Math.floor(Math.random()*100);
        this.gokBoodschap= '';
        this.controle= 0;
        this.controleNummer= 0
    }

    valideerGok(gokgetalNumber){
            gokgetalNumber = +this.gokgetalString; 
            this.gokBoodschap= 'Kies een ander getal';
            if (gokgetalNumber <= -1 || gokgetalNumber > 100) {
            return this.gokBoodschap}
    }

    nummerControle() {
          this.controle = this.randomNumber - this.gokgetalNumber;
          this.beurten = this.beurten - 1 ;
        }

      groterDan(gokgetalNumber, controleNummer) {
          return gokgetalNumber < controleNummer;
        }
  }
 
