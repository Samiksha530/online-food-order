import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private a :HttpClient)
  { }
  setdeta(num:String)
  {
return this.a.post("",num);
  }
}
