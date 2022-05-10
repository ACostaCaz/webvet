import { Observable,  throwError } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class ServicioCitas {

  private productsUrl = 'http://localhost:3002/appointments/newAppointment';

  private productsUrl1 = 'http://localhost:3002/appointments/getAppointments';
  
  constructor(private http: HttpClient) {}

  getCitas()  {
    return this.http.get(this.productsUrl1).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  addCitas(animal: any) {
    return this.http.post(this.productsUrl, animal).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }
}

