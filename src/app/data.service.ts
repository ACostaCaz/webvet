import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  
  createDb() {
    return {

      servicios: [
      { idAnimal: 11, nameAnimal: 'Eduardo', tipoServicio: 'Consulta', animal: 'Perro', descripcion: 'Este perro tiene mas de un problema, pero es un buen perro, saludos', precio: 45},
      { idAnimal: 12, nameAnimal: 'Nadal', tipoServicio: 'Operacion', animal: 'Caballo', descripcion: 'Este caballo tiene mas de un problema, pero es un buen perro, saludos', precio: 78},
      { idAnimal: 13, nameAnimal: 'Pablito', tipoServicio: 'Vacuna', animal: 'Gato', descripcion: 'Este gato tiene mas de un problema, pero es un buen perro, saludos', precio: 7},
      ]
      
    };
  }
}

