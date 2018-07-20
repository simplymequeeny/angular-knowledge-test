import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    
    if (!this.authService.isAuthenticated) this.router.navigate(['/login']);

    return of(this.authService.isAuthenticated);
  }
}