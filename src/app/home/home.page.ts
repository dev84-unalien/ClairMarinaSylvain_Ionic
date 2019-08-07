import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //#region Variables
  email: string;
  password: string;
  maVariable: NavController;
  //#endregion

  //#region Constructor
  constructor(navCtrl: NavController) {
    this.maVariable = navCtrl;
  }
  //#endregion

  //#region Connexion
  connexion() {
    // Créer un objet utilisateur
    let user = {
      email: this.email,
      password: this.password
    };
    //Stocker l'objet dans localstorage
    localStorage.user = JSON.stringify(user);
    // Change de page
    this.maVariable.navigateForward("connexion");
  }
  //#endregion
  
}
