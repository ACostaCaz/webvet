import { Component, OnInit } from '@angular/core';
import { ServicioAnimal } from '../ServicioAnimales/ServicioAnimales';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mostrar-animales',
  templateUrl: './mostrar-animales.component.html',
  styleUrls: ['./mostrar-animales.component.css']
})

export class MostrarAnimalesComponent implements OnInit {

      animal = {
        ownerId: "",
        name: "",
        animalType: "",
        ownerName: "",
        gender: "",
        age: "",
      }


      edit = false;
      add = false;
      animales: any;
    
      constructor(public ServicioAnimal: ServicioAnimal, private titleService: Title) {
        this.titleService.setTitle("Animales");
      }
    
      ngOnInit(): void {
        this.geAnimales();
        document.getElementsByName("animales")[0].style.fontWeight = "bold";
      }
    
      geAnimales() {
        this.ServicioAnimal.getAnimales().subscribe(animales => this.animales = animales);
      }
    
    }

