import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-historia-medica-paciente',
  templateUrl: './historia-medica-paciente.component.html',
  styleUrls: ['./historia-medica-paciente.component.css']
})
export class HistoriaMedicaPacienteComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Empleados");
  }
  ngOnInit(): void {
    document.getElementsByName("historiales")[0].style.fontWeight = "bold";
  }

}
