import { UsersService } from 'users.service';

import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot 
} from '@angular/router';

@Injectable()
export class CanActivateVetGuard implements CanActivate {
  constructor(private auth: AuthService) {}
