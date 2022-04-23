import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})

export class productoComponent {

  constructor(private http: HttpClient) {}
  
  anadir(producto: any): Observable<any> {
    return this.http.post("http://localhost:4200/addproduct/anadir", producto)   
  }
}


