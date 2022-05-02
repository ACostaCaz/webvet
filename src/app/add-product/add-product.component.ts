import { Component, OnInit } from '@angular/core';
//import { productoComponent } from '../producto/producto.component';
import { Router } from '@angular/router';

import{ inventarioVet } from '../model/models';
import { FunctionService } from '../funciones/funciones';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  producto: inventarioVet = {
    nombre: '',
    descripcion: '',
    precio: 0,
    cantidad: 0,
    imagen: 0,
  };

  submitted = false;
  constructor(private functionService: FunctionService, private titleService: Title) {
    this.titleService.setTitle("Inventario");
  }
  ngOnInit(): void{
    document.getElementsByName("inventario")[0].style.fontWeight = "bold";
  }
  newProduct(): void{
    this.submitted = false;
    this.producto = {
      nombre: '',
      descripcion: '',
      precio: 0,
      cantidad: 0,
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
