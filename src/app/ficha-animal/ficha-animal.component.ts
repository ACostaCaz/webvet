import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ficha-animal',
  templateUrl: './ficha-animal.component.html',
  styleUrls: ['./ficha-animal.component.css']
})
export class FichaAnimalComponent implements OnInit {

  id!: any;

  constructor(private route: ActivatedRoute, private path: Router)  {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  formulario = new FormGroup({
    dni: new FormControl(),
    nombre: new FormControl(),
    tipo: new FormControl(),
    genero: new FormControl(),
    edad: new FormControl(),
  })



  ngOnInit(): void {


    this.formulario.get("dni")!.setValue("")
    this.formulario.get("nombre")!.setValue("")
    this.formulario.get("tipo")!.setValue("")
    this.formulario.get("genero")!.setValue("")
    this.formulario.get("edad")!.setValue("")

  }



  modificar() {

    const data = {
      dni: "",
      animalName: "",
      animalType: "", 
      animalGender: "",
      animalAge: ""
    }

  }



}
