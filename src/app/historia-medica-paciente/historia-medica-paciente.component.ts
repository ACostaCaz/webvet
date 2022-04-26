import { Component, OnInit } from '@angular/core';

import { FunctionService } from '../funciones/funciones';
import { Animals } from '../model/models';
import { History } from '../model/models';
@Component({
  selector: 'app-historia-medica-paciente',
  templateUrl: './historia-medica-paciente.component.html',
  styleUrls: ['./historia-medica-paciente.component.css']
})
export class HistoriaMedicaPacienteComponent implements OnInit {

  historias?: History[];
  currentHistoria: History = {};
  currentIndex = -1;
  nombre='';

  constructor(private functionService: FunctionService) { }

  ngOnInit(): void {
    this.retrieveProductos();
  }
  retrieveProductos(): void {
    this.functionService.getAll().subscribe(
        data => {
          this.historias = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  /*sumar(producto: inventarioVet, index: this.currentIndex): void{
    this.productos
  }
  restar(): void{

  }*/
  refreshList(): void {
    this.retrieveProductos();
    this.currentHistoria = {};
    this.currentIndex = -1;
  }
  setActiveProduct(historia: History, index: number): void {
    this.currentHistoria = historia;
    this.currentIndex = index;
  }
  removeAllProductos(): void {
    this.functionService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }
  searchTitle(): void {
    this.currentHistoria = {};
    this.currentIndex = -1;
    this.functionService.findByTitle(this.nombre)
      .subscribe(
        data => {
          this.historias = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
