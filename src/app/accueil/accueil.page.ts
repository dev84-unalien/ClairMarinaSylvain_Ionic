import { Component, OnInit } from "@angular/core";
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform } from '@ionic/angular';
import { GoogleMaps, GoogleMap, Environment } from '@ionic-native/google-maps/ngx';
import * as $ from 'jquery';

@Component({
  selector: "app-accueil",
  templateUrl: "./accueil.page.html",
  styleUrls: ["./accueil.page.scss"]
})
export class AccueilPage implements OnInit {

  email: string;
  map: GoogleMap;  

  constructor(private platform: Platform) { }

  async ngOnInit() {
    await this.platform.ready();
  }

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
      .catch((e: any) => console.log('Error is', e));
  }


  resultQR(resultat) {
    alert(resultat);
  }
}
