import { Component, OnInit } from '@angular/core';
import { HistoriaMedAtr } from '../HistoriaMed/historiamed';
import { HistoriaMed } from '../HistoriaMed/historiamed.component';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-historia-medica-paciente',
  templateUrl: './historia-medica-paciente.component.html',
  styleUrls: ['./historia-medica-paciente.component.css']
})
export class HistoriaMedicaPacienteComponent implements OnInit {

  historia = {
    numhistorial: 0,
    tipoAnimal: '',
    fecha: '',
    idanimal: 0,
    descripcion: '',
  }
  edit = false;
  add = false;
  historias !: HistoriaMedAtr[];

  constructor(public HistoriaMed: HistoriaMed, private titleHistoria: Title) { 
    this.titleHistoria.setTitle("Historias");
  }

  ngOnInit(): void {
    this.getHistoriasMed();
        document.getElementsByName("historia")[0].style.fontWeight = "bold";
  }

  getHistoriasMed() {
    this.HistoriaMed.getHistoriasMed().subscribe(historias => this.historias = historias);
  }
}




