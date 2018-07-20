import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class AuthService {
  isAuthenticated = false;

  authenticate(user, password) : Observable<Boolean> {
    this.isAuthenticated = false;
    if (user == 'admin' && password == 'admin')  this.isAuthenticated = true;

    return of(this.isAuthenticated);
  }
}