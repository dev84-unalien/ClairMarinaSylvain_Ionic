import { Component } from "@angular/core";
import * as $ from "jquery";
import { Platform, NavController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  ishidden = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public nav: NavController
  ) {
    this.initializeApp();
  }

  click() {
    if (localStorage.connect == "true") {
      this.nav.navigateForward("file-attente");
    } else {
      this.nav.navigateForward("connexion");
    }
  }

  button() {
    if (localStorage.connect == "true") {
      localStorage.connect = "false";
      this.nav.navigateForward("accueil");
      $(".change").text("Connexion");
    }
    else{
      $(".change").text("Déconnexion");
      this.nav.navigateForward("connexion");
    }
  }
  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
