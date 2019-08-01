import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  maVariable:NavController;
  
  constructor(navCtrl: NavController) {
    this.maVariable = navCtrl;
  }
  accueil(){
    this.maVariable.navigateForward('accueil');
  }
  ngOnInit() {
  }

  

}
