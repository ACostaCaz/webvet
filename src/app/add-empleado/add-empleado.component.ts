import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Empleados");
}

ngOnInit(): void {

    document.getElementsByName("empleados")[0].style.fontWeight = "bold";

}

}
