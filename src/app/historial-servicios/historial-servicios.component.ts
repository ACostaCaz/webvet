import { Component, OnInit, Input } from '@angular/core';
import { Servicio } from '../Service/servicio.service';
import { ServiciosAtr } from '../Service/servicio';
import { Router } from '@angular/router';

  @Component({
    selector: 'app-historial-servicios',
    templateUrl: './historial-servicios.component.html',
    styleUrls: ['./historial-servicios.component.css']
  })

  export class HistorialServiciosComponent implements OnInit {

      servicio = {
        tipoServicio: '',
        nameAnimal: '',
        animal: '',
        descripcion: '',
        precio: 0,
      }


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
    
    }
