import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import * as $ from "jquery";
import { SecurityService } from "../services/security.service";

@Component({
  selector: "app-connexion",
  templateUrl: "./connexion.page.html",
  styleUrls: ["./connexion.page.scss"]
})
export class ConnexionPage implements OnInit {
  email: string;
  password: string;

  maVariable: NavController;

  constructor(navCtrl: NavController, public security: SecurityService) {
    this.maVariable = navCtrl;
  }
  accueil() {
    // Créer un objet utilisateur
    let user = {
      email: this.email,
      password: this.password
    };

    this.security.verifyEmailMessage(user.password);

    this.security.verifyPasswordMessage(user.password);

    if (
      this.security.checkEmail(user.email) &&
      this.security.checkPassword(user.password)
    ) {
      //Stocker l'objet dans localstorage
      localStorage.user = JSON.stringify(user);
      // Change de page
      this.maVariable.navigateForward("accueil");
    }
  }

  ngOnInit() {}
}
