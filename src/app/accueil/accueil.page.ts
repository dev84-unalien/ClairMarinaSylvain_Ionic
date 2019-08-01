import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-accueil",
  templateUrl: "./accueil.page.html",
  styleUrls: ["./accueil.page.scss"]
})
export class AccueilPage implements OnInit {
  email: string;

  constructor() {}

  ngOnInit() {}

  ionViewWillLeave() {
    alert("test");
  }

  ionViewDidEnter() {
    let user = JSON.parse(localStorage.user);
    this.email = user.email;

    if (localStorage.connect == "true") {
      localStorage.connect = false;
    } else {
      localStorage.connect = true;
    }
  }
}
