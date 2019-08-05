import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}

  getUser() {
    if (!localStorage.user) {
      return null;
    }

    let user = JSON.parse(localStorage.user);
    return user;
  }

  setUser(email, password) {
    let user = {
      email: email,
      password: password
    };
    localStorage.user = JSON.stringify(user);
  }

  isConnected() {
    let connected = false;

    if (this.getUser()) {
      connected = true;
    } else {
      connected = false;
    }

    return connected;
  }
}
