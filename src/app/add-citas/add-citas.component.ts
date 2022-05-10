import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ServicioCitas } from '../servicioCitas/ServicioCitas';

@Component({
  selector: 'app-add-citas',
  templateUrl: './add-citas.component.html',
  styleUrls: ['./add-citas.component.css']
})
export class AddCitasComponent implements OnInit {

  ownerName!: String;
  dni!: String;
  date!: String;
  description!: String;
  animalType!: String;

	constructor(public ServicioCitas: ServicioCitas, public router: Router, private titleService: Title) {
		this.titleService.setTitle("Añadir Servicio");
	  }
	
	  ngOnInit(): void {
		  document.getElementsByName("Citas")[0].style.fontWeight = "bold";
	  }
	
	 
	
	  addCita() {
		const data = {ownerName: this.ownerName, dni: this.dni, animalType: this.animalType, date: this.date, description: this.description};
	
	
		this.ServicioCitas.addCitas(data).subscribe(response => {
		  console.log(response)
		});

		this.router.navigateByUrl('/citas');
	
		
	  }
	
	}
	
	
	