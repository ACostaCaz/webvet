import { Component, OnInit } from '@angular/core';
import { servicioFactura } from '../ServicioFactura/servicioFactura.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-facturas',
  templateUrl: './add-facturas.component.html',
  styleUrls: ['./add-facturas.component.css']
})
export class AddFacturasComponent implements OnInit {

  billType!: string;
  animalType!: string;
  animalName!: string;
  idAnimal!: string;
  description!: string;
  cost!: string;
  
  constructor(public servicioFactura: servicioFactura, public router: Router, private titleService: Title) {
    this.titleService.setTitle("Añadir facturas");
  }

  ngOnInit(): void {
    document.getElementsByName("facturas")[0].style.fontWeight = "bold";
  }

 

  addFactura() {
    const data = { billType: this.billType,animalName:  this.animalName, 
      animalType:  this.animalType, description:  this.description, 
      cost: this.cost, createDate:this.idAnimal};


    this.servicioFactura.addFactura(data).subscribe(response => {
      console.log(response)
    });

    
    this.router.navigateByUrl('/historialFacturas');
  }

}



