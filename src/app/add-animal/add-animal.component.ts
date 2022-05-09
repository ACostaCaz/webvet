import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ServicioAnimal } from '../ServicioAnimales/ServicioAnimales';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})


export class AddAnimalComponent implements OnInit {

  ownerId!: String;
  name!: String;
  animalType!: String;
  ownerName!: String;
  gender!: String;
  age!: String;

	constructor(public ServicioAnimal: ServicioAnimal, public router: Router, private titleService: Title) {
		this.titleService.setTitle("Añadir Servicio");
	  }
	
	  ngOnInit(): void {
		document.getElementsByName("Empleados")[0].style.fontWeight = "bold";
	  }
	
	 
	
	  addAnimal() {
		const data = {ownerId: this.ownerId, name: this.name, animalType: this.animalType, ownerName: this.ownerName, gender: this.gender, age: this.age};
	
	
		this.ServicioAnimal.addAnimales(data).subscribe(response => {
		  console.log(response)
		});

		this.router.navigateByUrl('/mostrarAnimales');
	
		
	  }
	
	}
	
	
	