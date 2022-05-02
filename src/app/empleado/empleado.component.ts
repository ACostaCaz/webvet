import { Component, OnInit, Input } from '@angular/core';
import { EmpleadosAtr } from '../ServicioEmpleados/empleadosAtr';
import { Empleado } from '../ServicioEmpleados/EmpleadosServicio';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  empleado = {
    imagen: '',
    nombre: '',
  }


  edit = false;
  add = false;
  empleados!: any;

  constructor(public Empleado: Empleado, private titleService: Title) {
    this.titleService.setTitle("Servicios");
  }

  ngOnInit(): void {
    this.getEmpleados();
    document.getElementsByName("servicios")[0].style.fontWeight = "bold";
  }

  getEmpleados() {
    this.Empleado.getEmpleados().subscribe(empleados => this.empleados = empleados);
  }

}
