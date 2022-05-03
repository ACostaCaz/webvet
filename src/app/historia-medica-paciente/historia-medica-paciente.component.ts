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

  historias?: History[];
  //currentHistoria: History = {};
  currentIndex = -1;
  nombre='';

  constructor() { }

  ngOnInit(): void {
  }
}




