import { Component, OnInit } from '@angular/core';
import { productoComponent } from '../producto/producto.component';
import { Router } from '@angular/router';
import { Stock } from '../model/models';
import { FunctionService } from '../funciones/funciones';

@Component({
  selector: 'app-mod-product',
  templateUrl: './mod-product.component.html',
  styleUrls: ['./mod-product.component.css']
})

export class ModProductComponent {
  producto: Stock = {
    name: '',
    description: '',
    price: 0,
    units: 0,
    imagen: 0,
  };
  submitted = false;
  constructor(private functionService: FunctionService) { }
  ngOnInit(): void{

  }
  saveProduct(): void{
    const data = {
      nombre: this.producto.name,
      descripcion: this.producto.description,
      precio: this.producto.price,
      cantidad: this.producto.units,
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
