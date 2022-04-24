import { Component, OnInit } from '@angular/core';
import { añadirServicio1 } from '../Service/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-servicios',
  templateUrl: './add-servicios.component.html',
  styleUrls: ['./add-servicios.component.css']
})

export class AddServiciosComponent {
  tipoServicio!: string;
  animal!: string;
  nombreAnimal!: string;
  idAnimal!: number;
  descripcion!: string;
  precio!: number;

  constructor(public añadirServicio1: añadirServicio1, public router: Router) {}

  add() {
    const añadirServicio = { tipoServicio: this.tipoServicio, animal: this.animal, nombreAnimal: this.nombreAnimal, 
      idAnimal: this.idAnimal, descripcion: this.descripcion, precio: 
    this.precio};

    this.añadirServicio1.add(añadirServicio).subscribe(data => {
      this.router.navigateByUrl('/');
    });
  }
}


