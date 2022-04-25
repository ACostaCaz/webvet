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
	password!: string;
	repeatedPassword!: string;
	constructor(public userService: UsersService, public router: Router, private titleService: Title) {
		this.titleService.setTitle("Iniciar Sesión");
	}

  	register() {
		const user = { email: this.email, password: this.password, repeatedPassword: this.repeatedPassword};
			this.userService.register(user).subscribe(data => {
			this.router.navigateByUrl('/login');
		});
	}

}
