import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AnimalService } from '../servicios/animal/animal.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mostrar-animales',
  templateUrl: './mostrar-animales.component.html',
  styleUrls: ['./mostrar-animales.component.css']
})

export class MostrarAnimalesComponent implements OnInit {

      animales: any;
      allAnimales: any;
    
      constructor(public animalService: AnimalService, private titleService: Title) {
        this.titleService.setTitle("Animales");
      }

      buscador = new FormGroup({
        buscar: new FormControl('')
      })
    
      async ngOnInit() {

        this.animalService.showAnimals().then((data) => {
          data.subscribe((data) => {
            this.animales = data
            this.allAnimales = data
          });
        })
        document.getElementsByName("animales")[0].style.fontWeight = "bold";
      }


      filtrar(event: any) {
        
        var buscar:string = this.buscador.get("buscar")!.value
        buscar = buscar.toLowerCase()

        if (buscar == "" || buscar == " ") {
            this.animales = this.allAnimales
        }

        else {

            this.animales = [];
            this.allAnimales.forEach((element: any) => {
              
                var ownerId = element.ownerId.toString();
                var ownerName = element.ownerName.toString();
                var name = element.name.toString();
                var animalType = element.animalType.toString();



                if (ownerId.toLowerCase().includes(buscar.toLowerCase())) {
                    this.animales.push(element)
                    return
                }
                
                if (ownerName.toLowerCase().includes(buscar.toLowerCase())) {
                    this.animales.push(element)
                    return
                }

                if (name.toLowerCase().includes(buscar.toLowerCase())) {
                    this.animales.push(element)
                    return
                }

                if (animalType.toLowerCase().includes(buscar.toLowerCase())) {
                  this.animales.push(element)
                  
                }

            })
    
        }
      }
    
    
    }

