import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class historiaService {
  constructor(private http: HttpClient) {}

  aceptar(historia: any): Observable<any> {
    return this.http.post("http://localhost:3002/historia/aceptar", historia);
  }
}