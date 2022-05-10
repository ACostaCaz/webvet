import { Component, OnInit } from '@angular/core';
import { ServicioCitas } from '../servicioCitas/ServicioCitas';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mostrar-citas',
  templateUrl: './mostrar-citas.component.html',
  styleUrls: ['./mostrar-citas.component.css']
})
export class MostrarCitasComponent implements OnInit {

      cita = {
        ownerName: '',
        dni: '',
        date: '',
        description: '',
        animalType: '',
      }


      edit = false;
      add = false;
      citas: any;
    
      constructor(public ServicioCitas: ServicioCitas, private titleService: Title) {
        this.titleService.setTitle("");
      }
    
      ngOnInit(): void {
        this.getCitas();
      }
    
      getCitas() {
        this.ServicioCitas.getCitas().subscribe(citas => this.citas = citas);
      }
    
    }

