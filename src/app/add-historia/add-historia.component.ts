import { Component, OnInit } from '@angular/core';
import { historiaService } from '../historia/historia.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-historia',
  templateUrl: './add-historia.component.html',
  styleUrls: ['./add-historia.component.css']
})
export class AddHistoriaComponent implements OnInit{
  id!: number;
  created_At!: string;
  animal_id !: number;
  description !: string;
  treatment !: string;
  observaciones !: string;

  constructor(public historiaService: historiaService, public router: Router, private titleService: Title) {
    this.titleService.setTitle("Añadir Historia");
  }
  ngOnInit(): void {
    document.getElementsByName("historiales")[0].style.fontWeight = "bold";
  }

  aceptar() {
    const historia = { numhistorial: this.id, fecha: this.created_At, 
      idanimal: this.animal_id, descripcion: this.description, tratamiento: 
    this.treatment, observaciones: this.observaciones};

    this.historiaService.aceptar(historia).subscribe(data => {
      this.router.navigateByUrl('/');
    });
  }
}

