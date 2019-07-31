import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-inscription",
  templateUrl: "./inscription.page.html",
  styleUrls: ["./inscription.page.scss"]
})
export class InscriptionPage implements OnInit {
  
  constructor(public nav: NavController) {}

  accueil() {
    this.nav.navigateForward("accueil");
  }
  ngOnInit() {}
}
