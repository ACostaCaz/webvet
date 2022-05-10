import { Component } from '@angular/core';
import { UsersService } from '../users/users.service';
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
	email!: string;
	password!: string;

	constructor(public userService: UsersService, public router: Router, private titleService: Title) {
		this.titleService.setTitle("Iniciar Sesión");
		console.log("Token", this.userService.getToken())
	}

  	login() {
		const user = { email: this.email, password: this.password };
			this.userService.login(user).subscribe(data => {
				console.log(data)
			this.userService.setToken(data.token, data.role);
			this.router.navigateByUrl('/servicios');
		});
	}

	
}