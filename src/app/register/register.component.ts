import { Component, OnInit } from '@angular/core';
import { registroService } from '../registroClinica/registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  nombre!: string;
  direccion!: string;
  telefono!: number;
  ciudad!: string;
  codigoPostal!: number;
  pais!: string;
  iban!: string;
  image!: File;

  constructor(public registroService: registroService, public router: Router) {}

  terminar() {
    const registroClinica = { image: this.image, nombre: this.nombre, direccion: this.direccion, 
      telefono: this.telefono, ciudad: this.ciudad, codigoPostal: 
    this.codigoPostal,pais: this.pais, iban: this.iban};

    this.registroService.terminar(registroClinica).subscribe(data => {
      this.router.navigateByUrl('/');
    });
  }
}

