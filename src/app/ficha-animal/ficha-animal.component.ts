import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ficha-animal',
  templateUrl: './ficha-animal.component.html',
  styleUrls: ['./ficha-animal.component.css']
})
export class FichaAnimalComponent implements OnInit {

  id!: any;

  constructor(private route: ActivatedRoute, private path: Router)  {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
  }

}
