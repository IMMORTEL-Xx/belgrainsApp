import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  liste1 = false;
  liste2 = false;
  liste3 = false;
  
  constructor() {}

  deroulerListe1(){
    this.liste1 = !this.liste1;
    this.liste2 = false;
    this.liste3 = false;
    console.log(this.liste1);
  }

  deroulerListe2(){
    this.liste2 = !this.liste2;
    this.liste1 = false;
    this.liste3 = false;
    console.log(this.liste1);
  }

  deroulerListe3(){
    this.liste3 = !this.liste3;
    this.liste1 = false;
    this.liste2 = false;
    console.log(this.liste1);
  }

}
