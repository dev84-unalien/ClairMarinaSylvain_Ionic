import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SecurityService {
  nombreDeCarPassword = 8;

  constructor() {}

  verifyEmailMessage(email: string) {
    if (!email) {
      alert("Email : ce champ est obligatoire");
    }
  }

  verifyPasswordMessage(password: string) {
    if (!password) {
      alert("Mot de passe : ce champ est obligatoire");
    }

    if (password) {
      if (password.length < this.nombreDeCarPassword) {
        alert("Votre password est trop petit, 8 car min");
      }
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
