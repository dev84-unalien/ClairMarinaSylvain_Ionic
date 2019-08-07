import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import * as $ from "jquery";
import { SecurityService } from "../services/SecurityService";

@Component({
  selector: "app-connexion",
  templateUrl: "./connexion.page.html",
  styleUrls: ["./connexion.page.scss"]
})
export class ConnexionPage implements OnInit {

  //#region Variables
  surname: string;
  password: string;

  maVariable: NavController;
  //#endregion 
  //#region Constructeur
  constructor(navCtrl: NavController, public security: SecurityService) {
    this.maVariable = navCtrl;
  }
  //#endregion

  //#region Connexion
  accueil() {
    // Créer un objet utilisateur
    let user = {
      surname: this.surname,
      password: this.password
    };

    this.security.verifySurnameMessage(user.surname);
    this.security.verifyPasswordMessage(user.password);

    if (
      this.security.checkSurname(user.surname) &&
      this.security.checkPassword(user.password)
    ) {
      //Stocker l'objet dans localstorage
      localStorage.user = JSON.stringify(user);
      // Change de page
      this.maVariable.navigateForward("accueil");
      // Simule la connection
        localStorage.connect = true;
    }
  }

  ngOnInit() {}
  //#endregion

}
