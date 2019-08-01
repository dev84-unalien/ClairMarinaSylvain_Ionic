import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-connexion",
  templateUrl: "./connexion.page.html",
  styleUrls: ["./connexion.page.scss"]
})
export class ConnexionPage implements OnInit {
  email: string;
  password: string;

  maVariable: NavController;

  constructor(navCtrl: NavController) {
    this.maVariable = navCtrl;
  }
  accueil() {
    // Créer un objet utilisateur
    let user = {
      email: this.email,
      password: this.password
    };
    //Stocker l'objet dans localstorage
    localStorage.user = JSON.stringify(user);
    // Change de page
    this.maVariable.navigateForward("accueil");
  }

  ngOnInit() {}

}
