import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AjaxControllerService } from "../services/ajax-controller.service";
import * as $ from "jquery";
import { SecurityService } from "../services/SecurityService";

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
    public ajaxCtrl: AjaxControllerService,
    public security: SecurityService
  ) {}

  accueil() {
    let user = {
      email: this.email,
      password: this.password
    };

    this.security.verifyEmailMessage(user.password);

    this.security.verifyPasswordMessage(user.password, this.confirmPassword);

    if (
      this.security.checkEmail(user.email) &&
      this.security.checkPassword(user.password)
    ) {
      //this.ajaxCtrl.send("monUrl", { email: "test@gmail.com" });
      this.nav.navigateForward("accueil");
    }
  }
  ngOnInit() {}
}
