import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GuardService {
islogin=false;

  constructor() { }
  setlogin(islogin)
  {
    this.islogin=islogin;

  }
  getlogin()
  {
    return this.islogin;
  }
}
