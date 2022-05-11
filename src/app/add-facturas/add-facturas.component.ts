import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable,  throwError } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-add-facturas',
  templateUrl: './add-facturas.component.html',
  styleUrls: ['./add-facturas.component.css']
})
export class AddFacturasComponent implements OnInit {

  billType!: string;
  animalType!: string;
  animalName!: string;
  animalId!: any;
  description!: string;
  cost!: string;
  dni!: any;
  
  constructor(public router: Router,public http:HttpClient, public route: ActivatedRoute, private titleService: Title) {
    this.titleService.setTitle("Añadir facturas");
    this.animalId = this.route.snapshot.paramMap.get('id');
    this.dni = this.route.snapshot.paramMap.get('dni')

  }

  ngOnInit(): void {
    document.getElementsByName("facturas")[0].style.fontWeight = "bold";
  }

 
  addFactura(){
    const data = {dni: this.dni, billType: this.billType,animalName:  this.animalName, 
      animalType:  this.animalType, description:  this.description, 
      cost: this.cost, animalId:this.animalId};
     this.http.post('http://localhost:3002/bills/newBill', data).subscribe(
      res => {
        this.router.navigateByUrl('/fichaAnimal/'+this.animalId);
      }
    )
  }
 /*  addFactura() {
    const data = { billType: this.billType,animalName:  this.animalName, 
      animalType:  this.animalType, description:  this.description, 
      cost: this.cost, animalId:this.animalId};


    this.servicioFactura.addFactura(data).subscribe(response => {
      console.log(response)
    });

    
    this.router.navigateByUrl('/historialFacturas');
  } */

}



