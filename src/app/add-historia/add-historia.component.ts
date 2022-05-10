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
  historyIdd!: string;
  animalId!: string;
  treatment!: string;
  createdat!: string;


  constructor(public Historia: Historia, public router: Router, private titleService: Title) {
    this.titleService.setTitle("Añadir Historia");
  }
  ngOnInit(): void {
    document.getElementsByName("historiales")[0].style.fontWeight = "bold";
  }

  aceptar() {
    const historia = { historyIdd: this.historyIdd, createdat: this.createdat, 
      animalId: this.animalId, treatment: this.treatment,};

    this.Historia.addHistoria(historia).subscribe(response => {
      console.log(response)
    });

    this.router.navigateByUrl('/historial');
  }
}

