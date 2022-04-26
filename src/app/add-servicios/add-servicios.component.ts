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
  tipoServicio!: string;
  animal!: string;
  nameAnimal!: string;
  idAnimal!: number;
  descripcion!: string;
  precio!: number;
  
  constructor(public Servicio: Servicio, public router: Router, private titleService: Title) {
    this.titleService.setTitle("Añadir Servicio");
  }

  ngOnInit(): void {
    document.getElementsByName("servicios")[0].style.fontWeight = "bold";
  }

  addServicio() {
    const data = { tipoServicio: this.tipoServicio,nameAnimal:  this.nameAnimal, 
    animal:  this.animal, idAnimal:  this.idAnimal, descripcion:  this.descripcion, 
    precio: this.precio};


    this.Servicio.addServicio(data).subscribe(response => {
      console.log(response)
    });
  }

}


