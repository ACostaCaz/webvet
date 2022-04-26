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

  //private productsUrl = 'api/servicios';

  private productsUrl = 'http://localhost:3002/service/newService';

  private productsUrl1 = 'http://localhost:3002/service/showServices';
  
  constructor(private http: HttpClient) {}

  getServicios(): Observable<ServiciosAtr[]>  {
    return this.http.get<ServiciosAtr[]>(this.productsUrl1).pipe(
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


