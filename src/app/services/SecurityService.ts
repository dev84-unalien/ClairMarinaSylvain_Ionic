import { Injectable } from "@angular/core";
import * as $ from "jquery";
@Injectable({
  providedIn: "root"
})
export class SecurityService {
  nombreDeCarPassword = 8;

  constructor() {}
  verifyNameMessage(name: string) {
    if (name == "") {
      $("#inc_name").css("display", "flex");
    } else {
      $("#inc_name").css("display", "none");
    }
  }

  verifySurnameMessage(surname: string) {
    if (!surname) {
      $("#inc_surname").css("display", "flex");
    } else {
      $("#inc_surname").css("display", "none");
    }
  }

  verifyEmailMessage(email: string) {
    if (!email) {
      $("#inc_email").css("display", "flex");
    } else {
      $("#inc_email").css("display", "none");
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
    } else {
      $("#inc_password").css("display", "none");
    }

    if (confirmPassword.length < this.nombreDeCarPassword) {
      $("#inc_confirmpassword").css("display", "flex");
    } else {
      $("#inc_confirmpassword").css("display", "none");
    }
  }

  checkName(name: string) {
    let check = false;
    if (name) {
      check = true;
    }
    return check;
  }

  checkSurname(surname: string) {
    let check = false;
    if (surname) {
      check = true;
    }
    return check;
  }

  checkPassword(password: string) {
    let check = false;
    if (password && password.length >= this.nombreDeCarPassword) {
      check = true;
    }
    return check;
  }

  checkPasswordAndCofirm(password: string, confirmPassword: string) {
    return password == confirmPassword;
  }

  checkEmail(email: string) {
    let check = false;
    if (email) {
      check = true;
    }
    return check;
  }
}
