import { Component, OnInit } from "@angular/core";
import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner/ngx";
import * as $ from "jquery";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-accueil",
  templateUrl: "./accueil.page.html",
  styleUrls: ["./accueil.page.scss"]
})
export class AccueilPage implements OnInit {
  email: string;

  constructor(public userServ: UserService) {}

  ngOnInit() {}

  ionViewWillLeave() {}

  ionViewDidEnter() {
    this.icone();
  }

  icone() {
    if (this.userServ.isConnected()) {
      this.cacheIconeUtilisateur();
    } else {
      this.afficheIconeUtilisateur();
    }
  }

  starQR() {
    const context = this;
    let qr = new QRScanner();

    qr.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted

          // start scanning
          let scanSub = qr.scan().subscribe((text: string) => {
            context.resultQR(text);
            $("body").show();
            qr.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });

          qr.show();
          $("body").hide();
        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log("Error is", e));
  }

  resultQR(resultat) {
    alert(resultat);
  }

  cacheIconeUtilisateur() {
    // Si connecté alors display none icone
    $("#connect").css("display", "none");
  }

  afficheIconeUtilisateur() {
    // Sinon display flex icone
    $("#connect").css("display", "flex");
  }
}
