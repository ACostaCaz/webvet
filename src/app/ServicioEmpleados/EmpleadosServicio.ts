import { Observable,  throwError } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmpleadosAtr } from './empleadosAtr';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class Empleado {

  private productsUrl = 'http://localhost:3002/employ/newEmploy';

  private productsUrl1 = 'http://localhost:3002/employ/showEmployers';
  
  constructor(private http: HttpClient) {}

  getEmpleados()  {
    return this.http.get(this.productsUrl1).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  addEmpleado(empleado: EmpleadosAtr): Observable<EmpleadosAtr> {
    return this.http.post<EmpleadosAtr>(this.productsUrl, empleado).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }
}


