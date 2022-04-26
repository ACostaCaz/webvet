import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-inventario-clinica',
  templateUrl: './inventario-clinica.component.html',
  styleUrls: ['./inventario-clinica.component.css']
})
export class InventarioClinicaComponent implements OnInit {

    constructor(private titleService: Title) {
        this.titleService.setTitle("Inventario");
    }

    ngOnInit(): void {
      document.getElementsByName("inventario")[0].style.fontWeight = "bold";
    }

}
