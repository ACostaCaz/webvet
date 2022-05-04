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

	repeatedPassword!: string;
	repeatedEmail!: string;
	email!:string;
	password!:string;

	constructor(public Empleado: Empleado, public router: Router, private titleService: Title) {
		this.titleService.setTitle("Añadir Servicio");
	  }
	
	  ngOnInit(): void {
		document.getElementsByName("Empleados")[0].style.fontWeight = "bold";
	  }
	
	 
	
	  addEmpleado() {
		const data = {email: this.email, repeatedEmail: this.repeatedEmail, password: this.password, repeatedPassword: this.repeatedPassword};
	
	
		this.Empleado.addEmpleado(data).subscribe(response => {
		  console.log(response)
		});

		this.router.navigateByUrl('/empleados');
	
		
	  }
	
	}
	
	
	