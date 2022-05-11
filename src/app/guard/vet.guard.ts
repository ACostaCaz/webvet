import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VetGuard implements CanActivate {

  constructor(private cookie: CookieService, private path: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.cookie.get("role") == "vet") {
      return true;
    }
    else {

      //this.path.navigateByUrl("/permisoDenegado")
      return false
      
    }
  }

  
  
}
