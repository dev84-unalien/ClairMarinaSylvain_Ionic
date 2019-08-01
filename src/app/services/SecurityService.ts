import { Injectable } from "@angular/core";
import * as $ from "jquery";
@Injectable({
  providedIn: "root"
})
export class SecurityService {
  nombreDeCarPassword = 8;

  constructor() {}
  verifyEmailMessage(email: string) {
    if (!email) {
      $("#inc_email").css("display", "flex");
    }
  }

  verifyPasswordMessage(password: string, confirmPassword: string = null) {
    if (confirmPassword) {
      confirmPassword = confirmPassword;
    } else {
      confirmPassword = "";
    }

    if (!password) {
      $("#inc_password").css("display", "flex");
    }

    if (confirmPassword.length < this.nombreDeCarPassword) {
      $("#inc_confirmpassword").css("display", "flex");
    }
  }

  checkPassword(password: string) {
    let check = false;
    if (password && password.length > this.nombreDeCarPassword) {
      check = true;
    }
    return check;
  }
  checkEmail(email: string) {
    let check = false;
    if (email) {
      check = true;
    }
    return check;
  }
}
