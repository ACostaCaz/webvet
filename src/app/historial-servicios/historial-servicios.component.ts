import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-historial-servicios',
  templateUrl: './historial-servicios.component.html',
  styleUrls: ['./historial-servicios.component.css']
})
export class HistorialServiciosComponent implements OnInit {

  constructor(private titleService: Title) {
		this.titleService.setTitle("Servicios");
	}

  ngOnInit(): void {
      document.getElementsByName("servicios")[0].style.fontWeight = "bold";
  }

}
