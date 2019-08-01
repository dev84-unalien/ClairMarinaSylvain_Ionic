import { Injectable } from "@angular/core";
import * as $ from "jquery";

@Injectable({
  providedIn: "root"
})
export class AjaxControllerService {
  constructor() {}

  send(urlServer: any, data: any) {
    $.ajax({
      url: urlServer,
      data: data,
      success: function(result) {
        alert("Succes");
      },
      error: function(result) {
        alert("Error");
      }
    });
  }
}
