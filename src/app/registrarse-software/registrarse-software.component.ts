import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
	selector: 'app-registrarse-software',
	templateUrl: './registrarse-software.component.html',
	styleUrls: ['./registrarse-software.component.css'],

})
export class RegistrarseSoftwareComponent implements OnInit {
  
	email!: string;
	password!: string;
	constructor(private titleService: Title) { 

		this.titleService.setTitle("Registrarse");
	}


	ngOnInit(): void {
	}

}
