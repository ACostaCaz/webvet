import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: "root"
})
export class FacturaService {

  
  private productsUrl = 'http://localhost:3002/billing/newBill';

  constructor(private http: HttpClient) {}

  async getFacturas() {
    return await this.http.get("http://localhost:3002/bills/showBills")
  }

}


