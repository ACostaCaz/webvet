import { Component, OnInit } from '@angular/core';
import { productoComponent } from '../producto/producto.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mod-product',
  templateUrl: './mod-product.component.html',
  styleUrls: ['./mod-product.component.css']
})

export class ModProductComponent {
  nombreproducto!:string;
  descriproducto!:string;
  precioproducto!:number;
  cantidproducto!:number;
  imagenproducto!:unknown;

  constructor(public productoComponent: productoComponent, public router: Router) {}

   modificar() {
    const producto = { nombreproducto: this.nombreproducto, descriproducto: this.descriproducto, 
      precioproducto: this.precioproducto, cantidproducto: this.cantidproducto, imagenproducto: 
    this.imagenproducto};

    this.productoComponent.anadir(producto).subscribe(data => {
      this.router.navigateByUrl('/');
    });
  }
}
