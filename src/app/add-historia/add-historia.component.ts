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
<<<<<<< HEAD
  history_id!: string;
  createdAt!: string;
  animal_id!: string;
  treatment!: string;
=======
  numhistorial!: number;
  fecha!: string;
  idanimal !: number;
  descripcion !: string;
  treatment !: string;
  observaciones !: string;

>>>>>>> c06b13ca9da38ad07c98063779d3ec0863665978

  constructor(public Historia: Historia, public router: Router, private titleService: Title) {
    this.titleService.setTitle("Añadir Historia");
  }
  ngOnInit(): void {
    document.getElementsByName("historiales")[0].style.fontWeight = "bold";
  }

  aceptar() {
<<<<<<< HEAD
    const historia = { history_id: this.history_id, createdAt: this.createdAt, 
      animal_id: this.animal_id, treatment: this.treatment,};
=======
    const historia = { numhistorial: this.numhistorial, fecha: this.fecha, 
      idanimal: this.idanimal, descripcion: this.descripcion, treatment: 
    this.treatment, observaciones: this.observaciones};
>>>>>>> c06b13ca9da38ad07c98063779d3ec0863665978

    this.Historia.addHistoria(historia).subscribe(response => {
      console.log(response)
    });

    this.router.navigateByUrl('/historial');
  }
}

