import { Component, OnInit } from '@angular/core';
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


	



  	register(suscruption: string) {

		const email = this.credenciales.get('email')!.value;
		const repeatedEmail = this.credenciales.get('repeatedEmail')!.value;
		const password = this.credenciales.get('password')!.value;
		const repeatedPassword = this.credenciales.get('repeatedPassword')!.value;
		const cardNumber = this.pago.get('cardNumber')!.value;
		const expirationDate = this.pago.get('expirationDate')!.value;
		const cvv = this.pago.get('cvv')!.value;
		const cardOwnerName = this.pago.get('cardOwnerName')!.value;
		
		console.log(email)

		if (this.validationForm1(email, repeatedEmail, password, repeatedPassword)) {
			const user = { email: email, password: password, repeatedPassword: repeatedPassword, 
			suscription: suscruption, cardNumber: cardNumber, expirationDate: expirationDate,
			cvv: cvv, cardOwnerName :cardOwnerName};

			console.log(user)
			this.userService.register(user).subscribe(data => {
				alert("El usuario se ha creado correctamente");
				this.router.navigateByUrl('/login');
			
			});
		}
	}



	validationForm1(email: string, repeatedEmail: string, password: string, repeatedPassword: string, ): boolean {

		let value:boolean = true;

		var html;

		if (email != repeatedEmail) {

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

		if (password != repeatedPassword) {

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



}
