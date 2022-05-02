import { Observable,  throwError } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HistoriaAtr } from './HistoriaAtr';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class Historia {

  private productsUrl = 'http://localhost:3002/history/newHistory';

  private productsUrl1 = 'http://localhost:3002/history/showHistories';
  
  constructor(private http: HttpClient) {}

  getHistorias(): Observable<HistoriaAtr[]>  {
    return this.http.get<HistoriaAtr[]>(this.productsUrl1).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  addHistoria(historia: HistoriaAtr): Observable<HistoriaAtr> {
    return this.http.post<HistoriaAtr>(this.productsUrl, historia).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }
}


