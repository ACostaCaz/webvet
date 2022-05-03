import { Component, OnInit, Input } from '@angular/core';
import { Servicio } from '../Service/servicio.service';
import { ServiciosAtr } from '../Service/servicio';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

  @Component({
    selector: 'app-historial-servicios',
    templateUrl: './historial-servicios.component.html',
    styleUrls: ['./historial-servicios.component.css']
  })

  export class HistorialServiciosComponent implements OnInit {

      servicio = {
        serviceName: '',
        animalType: '',
        description: '',
        cost: 0,
      }


      edit = false;
      add = false;
      servicios!: ServiciosAtr[];
    
      constructor(public Servicio: Servicio, private titleService: Title) {
        this.titleService.setTitle("Servicios");
      }
    
      ngOnInit(): void {
        this.getServicios();
        document.getElementsByName("servicios")[0].style.fontWeight = "bold";
      }
    
      getServicios() {
        this.Servicio.getServicios().subscribe(servicios => this.servicios = servicios);
      }
    
    }
