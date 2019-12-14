import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, from } from 'rxjs';
import {GuardService} from './Guard.Service';
@Injectable({
  providedIn: 'root'
})
export class MyguardGuard implements CanActivate {
  canActivate()
    {
     return true;
  }
  constructor(private g: GuardService)
  {
    this.g.getlogin();
  }
  
}
