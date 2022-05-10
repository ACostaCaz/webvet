import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { FacturaService } from '../servicios/factura/factura.service';

@Component({
  selector: 'app-gestionar-facturas',
  templateUrl: './gestionar-facturas.component.html',
  styleUrls: ['./gestionar-facturas.component.css']
})
export class GestionarFacturasComponent implements OnInit {

      facturas!: any;
      allFacturas!: any;
    
      constructor(private titleService: Title, private servicioFactura: FacturaService) {
        this.titleService.setTitle("Servicios");
      }
    
      buscador = new FormGroup({
        buscar: new FormControl('')
      })

      async ngOnInit(): Promise<void> {
          
          this.servicioFactura.getFacturas().then((data) => {
            data.subscribe((data) => {
              this.allFacturas = data
              this.facturas = data
            });
          })
          
          document.getElementsByName("facturas")[0].style.fontWeight = "bold";
      }
    

      filtrar(event: any) {
        
        var buscar:string = this.buscador.get("buscar")!.value
        buscar = buscar.toLowerCase()
        this.facturas = this.allFacturas

        if (buscar == "" || buscar == " ") {
            this.facturas = this.allFacturas
        }

        else {

            this.facturas = [];
            this.allFacturas.forEach((element: any) => {
              
                var animalId = element.animalId.toString();
                var billType = element.billType.toString();
                var animalType = element.animalType.toString();
                var animalName = element.animalName.toString();
                var description = element.description.toString();


                if (animalId.toLowerCase().includes(buscar.toLowerCase())) {
                    this.facturas.push(element)
                    return
                }
                
                if (billType.toLowerCase().includes(buscar.toLowerCase())) {
                    this.facturas.push(element)
                    return
                }

                if (animalType.toLowerCase().includes(buscar.toLowerCase())) {
                    this.facturas.push(element)
                    return
                }

                if (animalName.toLowerCase().includes(buscar.toLowerCase())) {
                  this.facturas.push(element)
                  return
                }

                if (description.toLowerCase().includes(buscar.toLowerCase())) {
                  this.facturas.push(element)
      
                }
            })
    
        }
      }
}
