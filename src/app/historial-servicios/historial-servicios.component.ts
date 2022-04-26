<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
import { Servicio } from '../Service/servicio.service';
import { ServiciosAtr } from '../Service/servicio';
import { Router } from '@angular/router';
=======
import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
>>>>>>> 5d0d0996da615a9fabf9ce6b7cb063dea11ef7c3

  @Component({
    selector: 'app-historial-servicios',
    templateUrl: './historial-servicios.component.html',
    styleUrls: ['./historial-servicios.component.css']
  })

<<<<<<< HEAD
  export class HistorialServiciosComponent implements OnInit {

      servicio = {
        tipoServicio: '',
        nameAnimal: '',
        animal: '',
        idAnimal: 0,
        descripcion: '',
        precio: 0,
      }
=======
  constructor(private titleService: Title) {
		this.titleService.setTitle("Servicios");
	}

  ngOnInit(): void {
      document.getElementsByName("servicios")[0].style.fontWeight = "bold";
  }
>>>>>>> 5d0d0996da615a9fabf9ce6b7cb063dea11ef7c3


      edit = false;
      add = false;
      servicios!: ServiciosAtr[];
    
      constructor(public Servicio: Servicio) {}
    
      ngOnInit(): void {
        this.getServicios()
      }
    
      getServicios() {
        this.Servicio.getServicios().subscribe(servicios => this.servicios = servicios);
      }

      addServicio(servicio: ServiciosAtr) {
        this.Servicio.addServicio(servicio).subscribe(response => {
          console.log(response)
          this.getServicios();
        });
      }
    
    }
