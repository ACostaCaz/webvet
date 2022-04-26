import { Observable,  throwError } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiciosAtr } from './servicio';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class Servicio {

  private productsUrl = 'api/servicios';
  
  constructor(private http: HttpClient) {}

  getServicios(): Observable<ServiciosAtr[]>  {
    return this.http.get<ServiciosAtr[]>(this.productsUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  addServicio(servicio: ServiciosAtr): Observable<ServiciosAtr> {
    return this.http.post<ServiciosAtr>(this.productsUrl, servicio).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }
}


