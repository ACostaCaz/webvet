import { Component, OnInit } from '@angular/core';
import { Historia } from '../historiaServicio/historia.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-historia',
  templateUrl: './add-historia.component.html',
  styleUrls: ['./add-historia.component.css']
})
export class AddHistoriaComponent implements OnInit{
  numhistorial!: number;
  fecha!: string;
  idanimal!: number;
  descripcion!: string;
  tipoAnimal!: string;

  constructor(public Historia: Historia, public router: Router, private titleService: Title) {
    this.titleService.setTitle("Añadir Historia");
  }
  ngOnInit(): void {
    document.getElementsByName("historiales")[0].style.fontWeight = "bold";
  }

  aceptar() {
    const historia = { numhistorial: this.numhistorial, fecha: this.fecha, 
    idanimal: this.idanimal, descripcion: this.descripcion, tipoAnimal: 
    this.tipoAnimal};

    this.Historia.addHistoria(historia).subscribe(response => {
      console.log(response)
    });

    this.router.navigateByUrl('/historial');
  }
}

