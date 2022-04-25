import { Component, OnInit } from '@angular/core';
import { productoComponent } from '../producto/producto.component';
import { Router } from '@angular/router';
import { inventarioVet } from '../model/models';
import { FunctionService } from '../funciones/funciones';

@Component({
  selector: 'app-mod-product',
  templateUrl: './mod-product.component.html',
  styleUrls: ['./mod-product.component.css']
})

export class ModProductComponent {
  producto: inventarioVet = {
    nombre: '',
    descripcion: '',
    precio: 0,
    cantidad: 0,
    imagen: 0,
  };
  submitted = false;
  constructor(private functionService: FunctionService) { }
  ngOnInit(): void{

  }
  saveProduct(): void{
    const data = {
      nombre: this.producto.nombre,
      descripcion: this.producto.descripcion,
      precio: this.producto.precio,
      cantidad: this.producto.cantidad,
      imagen: this.producto.imagen
    }
    this.functionService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
}
