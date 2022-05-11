import { Observable,  throwError } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './producto';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class Producto {

  //private productsUrl = 'api/servicios';

  private productsUrl = 'http://localhost:3002/product/addproduct';

  private productsUrl1 = 'http://localhost:3002/product/showProducts';
  
  constructor(private http: HttpClient) {}

  getProductos(): Observable<Product[]>  {
    return this.http.get<Product[]>(this.productsUrl1).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  addProducto(producto: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, producto).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }
}


