import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Title} from "@angular/platform-browser";
import { Router } from '@angular/router';
import { UsersService } from '../users/users.service';

@Component({
	selector: 'app-registrarse-software',
	templateUrl: './registrarse-software.component.html',
	styleUrls: ['./registrarse-software.component.css'],

})
export class RegistrarseSoftwareComponent {
  

	constructor(public userService: UsersService, public router: Router, private titleService: Title) {
		this.titleService.setTitle("Iniciar Sesión");

	}


	credenciales = new FormGroup ({
		cif: new FormControl(),
		clinicName: new FormControl(),
		email: new FormControl(),
		repeatedEmail: new FormControl(),
		password: new FormControl(),
		repeatedPassword: new FormControl(),
	})


	pago = new FormGroup ({
		cardNumber: new FormControl(),
		expirationDate: new FormControl(),
		cvv: new FormControl(),
		cardOwnerName: new FormControl(),
	})


	



  	register(suscription: string) {

		const cif = this.credenciales.get('cif')!.value;
		const clinicName = this.credenciales.get('clinicName')!.value;
		const email = this.credenciales.get('email')!.value;
		const repeatedEmail = this.credenciales.get('repeatedEmail')!.value;
		const password = this.credenciales.get('password')!.value;
		const repeatedPassword = this.credenciales.get('repeatedPassword')!.value;
		/*const cardNumber = this.pago.get('cardNumber')!.value;
		const expirationDate = this.pago.get('expirationDate')!.value;
		const cvv = this.pago.get('cvv')!.value;
		const cardOwnerName = this.pago.get('cardOwnerName')!.value;*/

		if (this.validationForm1(email, repeatedEmail, password, repeatedPassword, cif, clinicName)) {
			
			const userRegister = { email: email, password: password, repeatedPassword: repeatedPassword}
			const userLogin = {email: email, password: password}

			
			this.userService.register(userRegister).subscribe(data => {
				this.userService.login(userLogin).subscribe(data => {
					alert("El usuario se ha creado correctamente");
					this.router.navigateByUrl("/login")
				})
				
			});

			
		}
	}



	validationForm1(email: string, repeatedEmail: string, password: string, repeatedPassword: string, cif: string, clinicName: string): boolean {

		let value = true;

		var html;

		if (email == null || password == null || repeatedEmail == null || repeatedPassword == null || cif == null || clinicName == null) {
			return false;
		}

		if (email != repeatedEmail) {

			html = document.getElementsByName("repeatedEmail")[0];
			html.setAttribute('value','');
			html.style.border = "1px solid #e24a4a";

			value = false;
			alert("Los emails tienen que ser iguales, inténtelo de nuevo");
			
		}

		else {

			html = document.getElementsByName("repeatedEmail")[0];
			html.style.border = "";

		}

		if (password != repeatedPassword) {

			html = document.getElementsByName("repeatedPassword")[0];
			html.setAttribute('value','');
			html.style.border = "1px solid #e24a4a";

			value = false;
			alert("Las contraseñas tienen que ser iguales, inténtelo de nuevo");

		}

		else {

			html = document.getElementsByName("repeatedPassword")[0];
			html.style.border = "";

		}


		if (clinicName == "") {
			html = document.getElementsByName("clinicName")[0];
			html.setAttribute('value','');
			html.style.border = "";
			
			value = false;
			alert("Por favor, rellene todos los campos");
			
		}

		else {

			html = document.getElementsByName("clinicName")[0];
			html.style.border = "";

		}

	
		if (cif == "") {
			html = document.getElementsByName("cif")[0];
			html.setAttribute('value','');
			html.style.border = "1px solid #e24a4a";
			
			value = false;
			alert("Por favor, rellene todos los campos");
			
		}

		else {

			html = document.getElementsByName("cif")[0];
			html.style.border = "";

		}
		
		console.log("Valor", value)
		

		return value;
		
	}



}
