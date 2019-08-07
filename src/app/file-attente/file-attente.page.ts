import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";

import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-file-attente',
  templateUrl: './file-attente.page.html',
  styleUrls: ['./file-attente.page.scss'],
})
export class FileAttentePage implements OnInit {
  //#region Variables
  appuyé = true;
  nbattente = 0;
  nbminute = 0;
  nbseconde = 0;
  //#endregion
  
  //#region Construction
  constructor() {

  }
  //#endregion

  //#region Vibration
  vibrate() {
    const vibration = new Vibration();
    vibration.vibrate([2000, 1000, 2000]);
  }
  //#endregion

  ngOnInit() {
  }

  //#region file d'attente

  /* setInterval(function a (){
    this.nbminute =this.nbminute-1;
    $("#valeurTemps").css("visibility", "visible");
    $("#valeurTemps").text(this.nbminute); }, 1000);*/

  button() {
    this.vibrate();
    if (this.nbattente == -1) {
      $("#main").css("display", "none");
      $("#votreTour").css("display", "flex");
    }
    else {
      $("#main").css("display", "flex");
      $("#votreTour").css("display", "none");
    }

    if (this.appuyé == true) {
      $("#background").removeClass("unclicked");
      $("#background").addClass("clicked");

      $("#joinText").css("visibility", "visible");
      $("#valeurNombre").css("visibility", "visible");
      $("#valeurTemps").css("visibility", "visible");

      $("#joinText").text("Vous avez rejoint la file d'attente")
      $("#joinText").css("color", "red");

      this.appuyé = false;
      this.nbattente += 1;
      this.nbminute += 5;
      this.nbseconde += 15;

      if (this.nbseconde == 60) {
        this.nbminute += 1;
        this.nbseconde = 0;
      }
    }
    else {
      $("#background").removeClass("clicked");
      $("#background").addClass("unclicked");

      $("#joinText").text("Vous avez quitté la file d'attente");
      $("#joinText").css("color", "blue");

      this.appuyé = true;
      this.nbattente -= 1;
      this.nbminute -= 5;
      this.nbseconde -= 15;
      if (this.nbseconde == 60) {
        this.nbminute -= 1;
        this.nbseconde = 0;
      }
    }
    $("#valeurNombre").text(this.nbattente);
    $("#valeurTemps").text(this.nbminute + "min " + this.nbseconde + "sec");
  }
  //#endregion

}
