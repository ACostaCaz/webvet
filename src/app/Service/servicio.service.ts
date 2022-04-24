import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class añadirServicio1 {
  constructor(private http: HttpClient) {}

  add(añadirServicio: any): Observable<any> {
    return this.http.post("http://localhost:3002/Servicio/añadirServicio1", añadirServicio);
  }
}