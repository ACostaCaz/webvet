import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class registroService {
  constructor(private http: HttpClient) {}

  terminar(registroClinica: any): Observable<any> {
    return this.http.post("http://localhost:3002/registro/terminar", registroClinica);
  }
}
