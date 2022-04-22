import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css']
})
export class PagarComponent implements OnInit {

	email!: string;
	password!: string;
	numero!: string;
	caducidad!: string;
	cvv!: number;
	nombre!: string;

	ngOnInit(): void {
	}

}
