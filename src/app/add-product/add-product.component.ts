import { Component, OnInit } from '@angular/core';
import { productoComponent } from '../producto/producto.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  nombreproducto!:string;
  descriproducto!:string;
  precioproducto!:number;
  cantidproducto!:number;
  imagenproducto!:unknown;

  constructor(public productoComponent: productoComponent, public router: Router) {}

   anadir() {
    const producto = { nombreproducto: this.nombreproducto, descriproducto: this.descriproducto, 
      precioproducto: this.precioproducto, cantidproducto: this.cantidproducto, imagenproducto: 
    this.imagenproducto};

    this.productoComponent.anadir(producto).subscribe(data => {
      this.router.navigateByUrl('/');
    });
  }
}
