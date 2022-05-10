import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private user: UsersService, private route: Router) { }

  ngOnInit(): void {
  }

  cerrarSesion() {
    this.user.logOut();
    this.route.navigateByUrl("/")
  }

}
