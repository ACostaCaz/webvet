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

  facturaType!: string;
  animalType!: string;
  animalName!: string;
  idAnimal!: number;
  description!: string;
  cost!: number;
  
  constructor(public servicioFactura: servicioFactura, public router: Router, private titleService: Title) {
    this.titleService.setTitle("Añadir facturas");
  }

  ngOnInit(): void {
    document.getElementsByName("facturas")[0].style.fontWeight = "bold";
  }

 

  addFactura() {
    const data = { facturaType: this.facturaType,animalName:  this.animalName, 
      animalType:  this.animalType, description:  this.description, 
      cost: this.cost};


    this.servicioFactura.addFactura(data).subscribe(response => {
      console.log(response)
    });

    
    this.router.navigateByUrl('/facturas');
  }

}



