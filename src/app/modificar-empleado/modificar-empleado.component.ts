import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-modificar-empleado',
  templateUrl: './modificar-empleado.component.html',
  styleUrls: ['./modificar-empleado.component.css']
})
export class ModificarEmpleadoComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Modificar Empleado");
  }
  ngOnInit(): void {
    document.getElementsByName("empleados")[0].style.fontWeight = "bold";
  }

}
