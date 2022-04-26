import { Component, OnInit } from '@angular/core';
import { añadirServicio1 } from '../Service/servicio.service';
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
  nombreAnimal!: string;
  idAnimal!: number;
  descripcion!: string;
  precio!: number;

  constructor(public añadirServicio1: añadirServicio1, public router: Router, private titleService: Title) {
    this.titleService.setTitle("Añadir Servicio");
  }
  ngOnInit(): void {
    document.getElementsByName("servicios")[0].style.fontWeight = "bold";
  }

  add() {
    const añadirServicio = { tipoServicio: this.tipoServicio, animal: this.animal, nombreAnimal: this.nombreAnimal, 
      idAnimal: this.idAnimal, descripcion: this.descripcion, precio: 
    this.precio};

    this.añadirServicio1.add(añadirServicio).subscribe(data => {
      this.router.navigateByUrl('/');
    });
  }
}


