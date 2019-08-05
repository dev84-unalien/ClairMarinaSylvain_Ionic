import { Component, OnInit } from "@angular/core";
<<<<<<< HEAD
import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner/ngx";
import * as $ from "jquery";
import { UserService } from "../services/user.service";
=======
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform } from '@ionic/angular';
import { GoogleMaps, GoogleMap, Environment } from '@ionic-native/google-maps/ngx';
import * as $ from 'jquery';
>>>>>>> 0d46857e99d8597431f4cc66b031a413f69e38d1

@Component({
  selector: "app-accueil",
  templateUrl: "./accueil.page.html",
  styleUrls: ["./accueil.page.scss"]
})
export class AccueilPage implements OnInit {

  connection: any;
  connexion: any;

  email: string;
  map: GoogleMap;  

<<<<<<< HEAD
  constructor(public userServ: UserService) {}
=======
  constructor(private platform: Platform) { }
>>>>>>> 0d46857e99d8597431f4cc66b031a413f69e38d1

  async ngOnInit() {
    await this.platform.ready();
  }

<<<<<<< HEAD
  ionViewWillLeave() {}

  ionViewDidEnter() {
    this.icone();
  }

  icone() {
    if (this.userServ.isConnected()) {
      this.cacheIconeUtilisateur();
    } else {
      this.afficheIconeUtilisateur();
=======
  ionViewWillLeave() { }


  ionViewDidEnter() {
    let user = JSON.parse(localStorage.user);
    this.email = user.email;    
    
    $("#map_canvas").hide();
      this.showMap = false;
  }

  showMap= false;

  loadMap() {
    if (Environment){
      Environment.setEnv({
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBb-oaPjtNbVzZ_1YEoy_3k09z6KVdgOCQ',
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBb-oaPjtNbVzZ_1YEoy_3k09z6KVdgOCQ',
      });
      
    }
    
    
    if (this.showMap == false) {
      $("#fond").hide();
      $("#map_canvas").show();
      this.map = GoogleMaps.create('map_canvas');
    //  Environment.setBackgroundColor('red');
      this.showMap = true;
    }

    else {
      $("#fond").show();
      $("#map_canvas").hide();
      this.showMap = false;
>>>>>>> 0d46857e99d8597431f4cc66b031a413f69e38d1
    }
  }

  starQR() {
    const context = this;
    let qr = new QRScanner();

<<<<<<< HEAD
=======

>>>>>>> 0d46857e99d8597431f4cc66b031a413f69e38d1
    qr.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted

<<<<<<< HEAD
=======

>>>>>>> 0d46857e99d8597431f4cc66b031a413f69e38d1
          // start scanning
          let scanSub = qr.scan().subscribe((text: string) => {
            context.resultQR(text);
            $("body").show();
            qr.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });

          qr.show();
          $("body").hide();
<<<<<<< HEAD
=======

>>>>>>> 0d46857e99d8597431f4cc66b031a413f69e38d1
        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
<<<<<<< HEAD
      .catch((e: any) => console.log("Error is", e));
  }

  resultQR(resultat) {
    alert(resultat);
=======
      .catch((e: any) => console.log('Error is', e));
>>>>>>> 0d46857e99d8597431f4cc66b031a413f69e38d1
  }

  cacheIconeUtilisateur() {
    // Si connecté alors display none icone
    $("#connect").css("display", "none");
  }

<<<<<<< HEAD
  afficheIconeUtilisateur() {
    // Sinon display flex icone
    $("#connect").css("display", "flex");
=======
  resultQR(resultat) {
    alert(resultat);

>>>>>>> 0d46857e99d8597431f4cc66b031a413f69e38d1
  }

}
