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
  //#region Variables
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
  placeFile: string;
  //#endregion

  //#region Constructor
  constructor(
    public nav: NavController,
    public ajaxCtrl: AjaxControllerService,
    public security: SecurityService
  ) {}
  //#endregion

  //#region Connexion
  accueil() {
    let user = {
      email: this.email,
      password: this.password,
      name: this.name,
      surname: this.surname,
      placeFile: 0,
    };

    this.security.verifyNameMessage(user.name);
    this.security.verifySurnameMessage(user.surname);
    this.security.verifyEmailMessage(user.email);
    this.security.verifyPasswordMessage(user.password, this.confirmPassword);

    if (
      this.security.checkName(user.name) &&
      this.security.checkSurname(user.surname) &&
      this.security.checkEmail(user.email) &&
      this.security.checkPassword(user.password) &&
      this.security.checkPasswordAndCofirm(user.password, this.confirmPassword)
    ) {
      //this.ajaxCtrl.send("monUrl", { email: "test@gmail.com" });
      this.nav.navigateForward("accueil");
    }
  }
  //#endregion

  ngOnInit() {}
}
