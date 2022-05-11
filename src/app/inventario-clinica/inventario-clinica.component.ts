import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Producto } from '../producto/producto.component';
import { Product } from '../producto/producto';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-inventario-clinica',
  templateUrl: './inventario-clinica.component.html',
  styleUrls: ['./inventario-clinica.component.css']
})
export class InventarioClinicaComponent implements OnInit {

    constructor(private titleService: Title, public Producto: Producto,) {
        this.titleService.setTitle("Inventario");
    }

    ngOnInit(): void {
      document.getElementsByName("inventario")[0].style.fontWeight = "bold";
        this.getProductos();
    }

    inventario!: any[];

    allInventario!: any[];

    buscador = new FormGroup({
      buscar: new FormControl('')
  })

  getProductos() {
    this.Producto.getProductos().subscribe((productos)  => {
        this.allInventario = productos;
        this.inventario = productos;
    });
  }
  filtrar(event: any) {
    var buscar:string = this.buscador.get("buscar")!.value
    buscar = buscar.toLowerCase()
    this.inventario = this.allInventario

    if (buscar == "" || buscar == " ") {
        this.inventario = this.allInventario
    }

    else {

        this.inventario = [];
        this.allInventario.forEach(element => {
            
            var name = element.name.toString();
            var description = element.description.toString();
            


            if (name.toLowerCase().includes(buscar.toLowerCase())) {
                this.inventario.push(element)
                return
            }
            
            if (description.toLowerCase().includes(buscar.toLowerCase())) {
                this.inventario.push(element)
                
            }

        })
    }
           
   

}



}
