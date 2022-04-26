import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

    constructor(private titleService: Title) {
        this.titleService.setTitle("Empleados");
    }

  ngOnInit(): void {

        document.getElementsByName("empleados")[0].style.fontWeight = "bold";

    } 

}
