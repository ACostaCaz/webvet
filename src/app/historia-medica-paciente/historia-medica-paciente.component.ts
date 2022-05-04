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

<<<<<<< HEAD
  historia = {
    history_id: '',
    createdAt: '',
    animal_id: '',
    treatment: '',
    createDate: ''
  }


  edit = false;
  add = false;
  historias!: any[];

  constructor(public Historia: Historia, private titleService: Title) {
    this.titleService.setTitle("Historias");
  }

  ngOnInit(): void {
    this.getHistorias();
    document.getElementsByName("historiales")[0].style.fontWeight = "bold";
=======
  historias?: History[];
  //currentHistoria: History = {};
  currentIndex = -1;
  nombre='';

  constructor() { }

  ngOnInit(): void {
>>>>>>> c06b13ca9da38ad07c98063779d3ec0863665978
  }
}




