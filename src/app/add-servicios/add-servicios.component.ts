import { Component, OnInit } from '@angular/core';
import { Servicio } from '../Service/servicio.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-servicios',
  templateUrl: './add-servicios.component.html',
  styleUrls: ['./add-servicios.component.css']
})

export class AddServiciosComponent implements OnInit{
  serviceType!: string;
  animalType!: string;
  animalName!: string;
  idAnimal!: number;
  description!: string;
  cost!: number;
  
  constructor(public Servicio: Servicio, public router: Router, private titleService: Title) {
    this.titleService.setTitle("Añadir Servicio");
  }

  ngOnInit(): void {
    document.getElementsByName("servicios")[0].style.fontWeight = "bold";
  }

 

  addServicio() {
    const data = { serviceType: this.serviceType,animalName:  this.animalName, 
      animalType:  this.animalType, description:  this.description, 
      cost: this.cost};


    this.Servicio.addServicio(data).subscribe(response => {
      console.log(response)
    });
  }

}


