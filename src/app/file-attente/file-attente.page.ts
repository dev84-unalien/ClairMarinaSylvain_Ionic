import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";

@Component({
  selector: 'app-file-attente',
  templateUrl: './file-attente.page.html',
  styleUrls: ['./file-attente.page.scss'],
})
export class FileAttentePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  appuyé = true;

  button(){
    
    if (this.appuyé == true){
    $("#background").removeClass("unclicked");
    $("#background").addClass("clicked");
    this.appuyé = false;
  }
  else {
    $("#background").removeClass("clicked");
    $("#background").addClass("unclicked");
    this.appuyé = true;
  }

}
}
