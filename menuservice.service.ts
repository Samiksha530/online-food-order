import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class MenuserviceService {

  constructor(private a :HttpClient)
   { }
   setdeta(num:String)
   {
return this.a.post("http://localhost:8080/miniproject/item",num);
   }

   cartdata(y)
   {
      return this.a.post("http://localhost:8080/miniproject/card",y);
   }

   getdata(x)
   {
      alert("userdata")
      return this.a.post("http://localhost:8080/miniproject/user",x);
   }
   
}
