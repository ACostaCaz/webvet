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
  }

  getHistorias() {
    this.Historia.getHistorias().subscribe(historias => this.historias = historias);
  }

}




