import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto/producto.component';
import { Product } from '../producto/producto';

import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-gestion-inventario',
  templateUrl: './gestion-inventario.component.html',
  styleUrls: ['./gestion-inventario.component.css']
})
export class GestionInventarioComponent implements OnInit {
  producto = {
    name: '',
    description: '',
    units: 0,
    price: 0,
  }


  edit = false;
  add = false;
  productos!: Product[];

  constructor(public Producto: Producto, private titleService: Title) {
    this.titleService.setTitle("Productos");
  }

  ngOnInit(): void {
    this.getProductos();
    document.getElementsByName("productos")[0].style.fontWeight = "bold";
  }

  getProductos() {
    this.Producto.getProducto().subscribe(productos => this.productos = productos);
  }

}