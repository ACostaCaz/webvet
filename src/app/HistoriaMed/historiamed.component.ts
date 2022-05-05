import { Observable,  throwError } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HistoriaMedAtr } from './historiamed';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
    providedIn: "root"
})

export class HistoriaMed {
    private historiamedUrl = 'http://localhost:3002/historyMed/newHistoryMed';
    private historiamedUrl1 = 'http://localhost:3002/historyMed/showHistoryMed';

    constructor(private http: HttpClient) {}

    getHistoriasMed(): Observable<HistoriaMedAtr[]>  {
        return this.http.get<HistoriaMedAtr[]>(this.historiamedUrl1).pipe(
          retry(2),
          catchError((error: HttpErrorResponse) => {
            console.error(error);
            return throwError(error);
          })
        );
    }
    addHistoriaMed(historia: HistoriaMedAtr): Observable<HistoriaMedAtr> {
        return this.http.post<HistoriaMedAtr>(this.historiamedUrl, historia).pipe(
          catchError((error: HttpErrorResponse) => {
            console.error(error);
            return throwError(error);
          })
        )
    }
}
