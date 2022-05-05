import { Component, OnInit } from '@angular/core';
import { servicioFactura } from '../ServicioFactura/servicioFactura.service';
import { facturaAtr } from '../ServicioFactura/factura';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gestionar-facturas',
  templateUrl: './gestionar-facturas.component.html',
  styleUrls: ['./gestionar-facturas.component.css']
})
export class GestionarFacturasComponent implements OnInit {

      factura = {
        billType: '',
        nameAnimal: '',
        animal: '',
        descripcion: '',
        precio: '',
        createDate:''
      }


      edit = false;
      add = false;
      facturas!: facturaAtr[];
    
      constructor(public servicioFactura: servicioFactura, private titleService: Title) {
        this.titleService.setTitle("Servicios");
      }
    
      ngOnInit(): void {
        this.getFacturas();
        document.getElementsByName("facturas")[0].style.fontWeight = "bold";
      }
    
      getFacturas() {
        this.servicioFactura.getFacturas().subscribe(facturas => this.facturas = facturas);
      }
    
    }

