import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { Token } from "@angular/compiler";
@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient, private cookies: CookieService) {}
  
  login(user: any): Observable<any> {
    return this.http.post("http://localhost:3002/users/login", user);
  }

  register(user: any): Observable<any> {
    return this.http.post("http://localhost:3002/users/signup", user);
  }

  setToken(token: string, role: string) {
    this.cookies.set("token", token);
    this.cookies.set("role", role);
  }
  
  getToken() {
    return this.cookies.get("token");
  }

  getRole() {
    return this.cookies.get("role");
  }

  logOut() {
    this.cookies.delete("role");
    this.cookies.delete("token");
  }


  currentUser() {
    if (this.getToken()){
      return true;
    }

    else {
      return false;
    }
  }
}