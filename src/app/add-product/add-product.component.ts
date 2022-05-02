import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto/producto.component';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})


export class AddProductoComponent implements OnInit{
  name !: string;
  description !: string;
  units !: number;
  price !: number;
  
  constructor(public Producto: Producto, public router: Router, private titleService: Title) {
    this.titleService.setTitle("Añadir Producto");
  }

  ngOnInit(): void {
    document.getElementsByName("productos")[0].style.fontWeight = "bold";
  }

 

  addProducto() {
    const data = { name: this.name, description:  this.description, 
      units:  this.units, price: this.price};


    this.Producto.addProducto(data).subscribe(response => {
      console.log(response)
    });

    
    this.router.navigateByUrl('/productos');
  }

}
