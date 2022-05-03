import { Component, OnInit } from '@angular/core';
import { Empleado } from '../ServicioEmpleados/EmpleadosServicio';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent implements OnInit {

	imagen!: File;
	nombre!: string;
	apellidos!: string;
	funcPrincipal!: string;
	telefono!: number;
	dni!: string;
	correo!:string;
	password!:string;

	constructor(public Empleado: Empleado, public router: Router, private titleService: Title) {
		this.titleService.setTitle("Añadir Servicio");
	  }
	
	  ngOnInit(): void {
		document.getElementsByName("servicios")[0].style.fontWeight = "bold";
	  }
	
	 
	
	  addEmpleado() {
		const data = { imagen: this.imagen,nombre:  this.nombre, 
			apellidos:  this.apellidos, funcPrincipal:  this.funcPrincipal, 
			telefono: this.telefono, dni: this.dni, correo: this.correo, password: this.password};
	
	
		this.Empleado.addEmpleado(data).subscribe(response => {
		  console.log(response)
		});
	
		
		this.router.navigateByUrl('/servicios');
	  }
	
	}
	
	
	