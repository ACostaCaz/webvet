import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AnimalService } from '../servicios/animal/animal.service';

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

	constructor(public animalService: AnimalService, public router: Router, private titleService: Title) {
		this.titleService.setTitle("Añadir Servicio");
	}
	
	ngOnInit(): void {
		document.getElementsByName("Animales")[0].style.fontWeight = "bold";
	}
	
	addAnimal() {
		const data = {ownerId: this.ownerId, name: this.name, animalType: this.animalType, ownerName: this.ownerName, gender: this.gender, age: this.age};
		console.log(data)
		this.animalService.newAnimal(data)
		this.router.navigateByUrl('/mostrarAnimales');
	}
	
	}
	
	
	