import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../servicios/animal/animal.service';
import { FacturaService } from '../servicios/factura/factura.service';

@Component({
  selector: 'app-ficha-animal',
  templateUrl: './ficha-animal.component.html',
  styleUrls: ['./ficha-animal.component.css']
})
export class FichaAnimalComponent implements OnInit {

  id!: any;
  dni!: any;
  animalData: any;

  historias!: any[];
  facturas!: any[];


  
  constructor(private route: ActivatedRoute, private path: Router, private animalService: AnimalService,
    private bills: FacturaService)  {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  formulario = new FormGroup({
    dni: new FormControl(),
    nombre: new FormControl(),
    tipo: new FormControl(),
    genero: new FormControl(),
    edad: new FormControl(),
  })



  async ngOnInit() {

    this.animalService.showAnimal(this.id).then((data) => {
      data.subscribe((data: any) => {
        console.log(data)
        this.dni = data.ownerId
        this.formulario.get("dni")!.setValue(data.ownerId)
        this.formulario.get("nombre")!.setValue(data.name)
        this.formulario.get("tipo")!.setValue(data.animalType)
        this.formulario.get("genero")!.setValue(data.gender)
        this.formulario.get("edad")!.setValue(data.age)
        
      });
    })


    this.bills.getFacturasAnimal(this.id).then((data) => {
      data.subscribe((data: any) => {
        this.facturas = data
      });
    });

    (await this.animalService.getAnimalHistory(this.id)).subscribe((data:any) => {
      this.historias = data
    })




    

  }



  modificar() {

    const data = {
      ownerId: this.formulario.get("dni")!.value,
      name: this.formulario.get("nombre")!.value,
      animalType: this.formulario.get("tipo")!.value,
      gender: this.formulario.get("genero")!.value,
      age: this.formulario.get("edad")!.value,
    }

    this.animalService.updateAnimal(this.id, data)

  }


  eliminar() {
    var nombre = this.formulario.get("nombre")!.value
    var opcion = confirm("Está segur@ de que quiere eliminar a " + nombre + ". Esta acción es irreversible")
    
    if (opcion) {
      this.animalService.removeAnimal(this.id)
    }

  }



}
