import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { Router } from '@angular/router';
import { UsersService } from '../users/users.service';

@Component({
	selector: 'app-registrarse-software',
	templateUrl: './registrarse-software.component.html',
	styleUrls: ['./registrarse-software.component.css'],

})
export class RegistrarseSoftwareComponent {
  
	email!: string;
	repeatedEmail!: string;
	password!: string;
	repeatedPassword!: string;
	constructor(public userService: UsersService, public router: Router, private titleService: Title) {
		this.titleService.setTitle("Iniciar Sesión");
	}

  	register() {
		
		if (this.validation()) {
			const user = { email: this.email, password: this.password, repeatedPassword: this.repeatedPassword};
				this.userService.register(user).subscribe(data => {
				this.router.navigateByUrl('/login');
				alert("El usuario se ha creado correctamente");
			});
		}
	}


	validation(): boolean {

		let value:boolean = true;

		var html;

		if (this.email != this.repeatedEmail) {

			html = document.getElementsByName("repeatedEmail")[0];
			html.setAttribute('value','');
			html.style.border = "1px solid #e24a4a";

			alert("Los emails tienen que ser iguales, inténtelo de nuevo");
			value = false;
			
		}

		else {

			html = document.getElementsByName("repeatedEmail")[0];
			html.style.border = "1px solid black";

		}

		if (this.password != this.repeatedPassword) {

			html = document.getElementsByName("repeatedPassword")[0];
			html.setAttribute('value','');
			html.style.border = "1px solid #e24a4a";

			alert("Las contraseñas tienen que ser iguales, inténtelo de nuevo");
			value = false;

		}

		else {

			html = document.getElementsByName("repeatedPassword")[0];
			html.style.border = "1px solid black";

		}

		
		

		return value;
		
	}


	inputFields() {

	}

}
