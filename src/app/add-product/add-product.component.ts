import { Component, OnInit } from '@angular/core';
//import { productoComponent } from '../producto/producto.component';
import { Router } from '@angular/router';

import{ Stock } from '../model/models';
import { FunctionService } from '../funciones/funciones';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit{
  producto: Stock = {
    name: '',
    description: '',
    price: 0,
    units: 0,
    imagen: 0,
  };

  submitted = false;
  constructor(private functionService: FunctionService) {}
  ngOnInit(): void{

  }
  newProduct(): void{
    this.submitted = false;
    this.producto = {
      name: '',
      description: '',
      price: 0,
      units: 0,
      imagen: 0,
    };
  }
  
  /*constructor(public productoComponent: productoComponent, public router: Router) {}

  anadir() {
    const producto = { nombreproducto: this.nombreproducto, descriproducto: this.descriproducto, 
      precioproducto: this.precioproducto, cantidproducto: this.cantidproducto, imagenproducto: 
    this.imagenproducto};

    this.productoComponent.anadir(producto).subscribe(data => {
      this.router.navigateByUrl('/');
    });
  }*/
}
