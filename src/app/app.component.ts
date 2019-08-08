import { Component } from "@angular/core";
import * as $ from "jquery";
import { Platform, NavController, Events } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AccueilPage } from "./accueil/accueil.page";
import { UserService } from "./services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {

  //#region Variables
  ishidden = false;
  //#endregion

  //#region Constructor
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public nav: NavController,
    public userServ: UserService,
    public events: Events
  ) {
    this.initializeApp();
  }
  //#endregion

  //#region Connexion
  click() {
    if (localStorage.connect == "true") {
      this.nav.navigateForward("file-attente");
    } else {
      this.nav.navigateForward("connexion");
    }
  }
  //#endregion

  //#region Deconnexion
  buttonDeconnection() {
    if (localStorage.connect == "true") {
      localStorage.connect = "false";
      localStorage.user = "";
      this.nav.navigateForward("accueil");
    } else {
      this.nav.navigateForward("connexion");
    }
    this.events.publish('menu:click');
  }
  //#endregion

  //#region Refresh menu
  menuOpened () {
    if (localStorage.connect == "false") {
      $(".change span").text("Connexion");
    }
    else{
      $(".change span").text("Déconnexion");
    }
  }
  //#endregion

  //#region affichage QR
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  //#endregion
}
