import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AjaxControllerService } from "../services/ajax-controller.service";
import * as $ from "jquery";

@Component({
  selector: "app-inscription",
  templateUrl: "./inscription.page.html",
  styleUrls: ["./inscription.page.scss"]
})
export class InscriptionPage implements OnInit {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor(
    public nav: NavController,
    public ajaxCtrl: AjaxControllerService
  ) {}

  accueil() {
    //this.ajaxCtrl.send("monUrl", { email: "test@gmail.com" });
    this.nav.navigateForward("accueil");
  }
  ngOnInit() {}
}
