import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 constructor(private a :HttpClient)
   { }
   setdeta(num:String)
   {
return this.a.post("http://localhost:8080/miniproject/log",num);
   }





}