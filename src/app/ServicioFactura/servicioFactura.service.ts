import { Observable,  throwError } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { facturaAtr } from './factura';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class servicioFactura {

  //private productsUrl = 'api/servicios';

  private productsUrl = 'http://localhost:3002/factura/newFactura';

  private productsUrl1 = 'http://localhost:3002/service/showFactura';
  
  constructor(private http: HttpClient) {}

  getFacturas(): Observable<facturaAtr[]>  {
    return this.http.get<facturaAtr[]>(this.productsUrl1).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  addFactura(factura: facturaAtr): Observable<facturaAtr> {
    return this.http.post<facturaAtr>(this.productsUrl, factura).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }
}


