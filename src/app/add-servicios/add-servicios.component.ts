import { Component, OnInit } from '@angular/core';
import { Servicio } from '../Service/servicio.service';
import { Router } from '@angular/router';
import { ServiciosAtr } from '../Service/servicio';

@Component({
  selector: 'app-add-servicios',
  templateUrl: './add-servicios.component.html',
  styleUrls: ['./add-servicios.component.css']
})

export class AddServiciosComponent {
  tipoServicio!: string;
  animal!: string;
  nameAnimal!: string;
  idAnimal!: number;
  descripcion!: string;
  precio!: number;
  
  constructor(public Servicio: Servicio, public router: Router) {}

  addServicio() {
    const data = { tipoServicio: this.tipoServicio,nameAnimal:  this.nameAnimal, 
    animal:  this.animal, idAnimal:  this.idAnimal, descripcion:  this.descripcion, 
    precio: this.precio};

    this.Servicio.addServicio(data).subscribe(response => {
      console.log(response)
    });
  }

}


