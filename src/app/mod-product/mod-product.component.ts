import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mod-product',
  templateUrl: './mod-product.component.html',
  styleUrls: ['./mod-product.component.css']
})

export class ModProductComponent {
  /*producto: Product = {
    name: '',
    description: '',
    price: 0,
    units: 0,
    imagen: 0,
  };
  submitted = false;

  constructor(private functionService: FunctionService, private titleService: Title) { 
    this.titleService.setTitle("Iniciar Sesión");
  }
  ngOnInit(): void{
    document.getElementsByName("inventario")[0].style.fontWeight = "bold";
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
  }*/
}
