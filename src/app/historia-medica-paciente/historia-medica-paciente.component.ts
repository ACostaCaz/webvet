import { Component, OnInit } from '@angular/core';
import { HistoriaAtr } from '../historiaServicio/HistoriaAtr';
import { Historia } from '../historiaServicio/historia.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-historia-medica-paciente',
  templateUrl: './historia-medica-paciente.component.html',
  styleUrls: ['./historia-medica-paciente.component.css']
})
export class HistoriaMedicaPacienteComponent implements OnInit {

@Component({
  selector: 'app-historia-medica',
  templateUrl: './historia-medica.component.html',
  styleUrls: ['./historia-medica.component.css']
})

  historia = {
    numhistorial: 0,
    fecha: '',
    tipoAnimal: '',
    idanimal: 0,
    descripcion: '',
    tratamiento: '',
    observaciones: '',
    veterinarioEncargado: ''
  }


  edit = false;
  add = false;
  historias!: HistoriaAtr[];

  constructor(public Historia: Historia, private titleService: Title) {
    this.titleService.setTitle("Historias");
  }

  ngOnInit(): void {
    this.getHistorias();
    document.getElementsByName("historias")[0].style.fontWeight = "bold";
  }

  getHistorias() {
    this.Historia.getHistorias().subscribe(historias => this.historias = historias);
  }

}




