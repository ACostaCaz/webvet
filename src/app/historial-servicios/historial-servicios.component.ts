import { Component, OnInit, Input } from '@angular/core';
import { Servicio } from '../Service/servicio.service';
import { ServiciosAtr } from '../Service/servicio';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup } from '@angular/forms';

  @Component({
    selector: 'app-historial-servicios',
    templateUrl: './historial-servicios.component.html',
    styleUrls: ['./historial-servicios.component.css']
  })

export class HistorialServiciosComponent implements OnInit {

    servicio = {
        serviceName: '',
        animalType: '',
        description: '',
        cost: 0,
    }


    edit = false;
    add = false;

    servicios!: ServiciosAtr[];

    allServicios!: ServiciosAtr[];

    constructor(public Servicio: Servicio, private titleService: Title) {
        this.titleService.setTitle("Servicios");
        
    }

    ngOnInit(): void {
        this.getServicios();
        console.log(this.allServicios)
        document.getElementsByName("servicios")[0].style.fontWeight = "bold";
        this.servicios = this.allServicios;
        console.log(this.servicios)
        console.log(this.allServicios)
    }

    async getServicios() {
        await this.Servicio.getServicios().subscribe(servicios => {
            this.allServicios = servicios
            this.servicios = servicios});        
    }


    buscador = new FormGroup({
        buscar: new FormControl('')
    })




    filtrar(event: any) {
        var buscar:string = this.buscador.get("buscar")!.value
        buscar = buscar.toLowerCase()
        this.servicios = this.allServicios

        if (buscar == "" || buscar == " ") {
            this.servicios = this.allServicios
        }

        else {

            this.servicios = [];
            this.allServicios.forEach(element => {
                
                var type = element.animalType.toString();
                var serviceName = element.serviceName.toString();
                var description = element.description.toString();


                if (type.toLowerCase().includes(buscar.toLowerCase())) {
                    this.servicios.push(element)
                    return
                }
                
                if (description.toLowerCase().includes(buscar.toLowerCase())) {
                    this.servicios.push(element)
                    return
                }

                if (serviceName.toLowerCase().includes(buscar.toLowerCase())) {
                    this.servicios.push(element)
                    return
                }
            /*
            if (element.cost.toLowerCase().includes(buscar.toLowerCase())) {
                this.servicios.push(element)
            }*/

            })
        }
               
       
    
    }

      
    
}
