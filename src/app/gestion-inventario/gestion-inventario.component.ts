import { Component, OnInit } from '@angular/core';
import { Modelo } from '../model/models';
import { FunctionService } from '../funciones/funciones';
@Component({
  selector: 'app-gestion-inventario',
  templateUrl: './gestion-inventario.component.html',
  styleUrls: ['./gestion-inventario.component.css']
})
export class GestionInventarioComponent implements OnInit {
  productos?: Modelo[];
  currentModelo: Modelo{};
  currentIndex = -1;
  nombre='';

  constructor(private functionService: FunctionService) { }

  ngOnInit(): void {
    this.retrieveProductos();
  }
  retrieveProductos(): void {
    this.functionService.getAll()
      .subscribe(
        data => {
          this.productos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveProductos();
    this.currentModelo = {};
    this.currentIndex = -1;
  }
  setActiveProduct(producto: Modelo, index: number): void {
    this.currentModelo = producto;
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
    this.currentModelo = {};
    this.currentIndex = -1;
    this.functionService.findByTitle(this.title)
      .subscribe(
        data => {
          this.productos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
