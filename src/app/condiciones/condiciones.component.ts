import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-condiciones',
  templateUrl: './condiciones.component.html',
  styleUrls: ['./condiciones.component.css']
})
export class CondicionesComponent implements OnInit {

  constructor(private titleService: Title) { 

    this.titleService.setTitle("Condiciones");
  }

  ngOnInit(): void {
  }

}
