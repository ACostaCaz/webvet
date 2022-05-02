import { Component, OnInit } from '@angular/core';
import { Product } from '../model/models';
import { FunctionService } from '../funciones/funciones';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-gestion-inventario',
  templateUrl: './gestion-inventario.component.html',
  styleUrls: ['./gestion-inventario.component.css']
})
export class GestionInventarioComponent implements OnInit {
  productos?: Product[];
  currentModelo: Product = {};
  currentIndex = -1;
  nombre='';

  constructor(private functionService: FunctionService/*, private titleService: Title*/) { 
    //this.titleService.setTitle("Inventario");
  }

  ngOnInit(): void {
    this.retrieveProductos();
    //document.getElementsByName("inventario")[0].style.fontWeight = "bold";
  }
  retrieveProductos(): void {
    this.functionService.getAll().subscribe(
        data => {
          this.productos = data;
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
    this.currentModelo = {};
    this.currentIndex = -1;
  }
  setActiveProduct(producto: Product, index: number): void {
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
    this.functionService.findByTitle(this.nombre)
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
