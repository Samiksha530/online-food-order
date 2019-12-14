import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
   providedIn: 'root'
})
export class ServletService {

   constructor(private a: HttpClient) { }
   setdeta(num) {
      return this.a.post("http://localhost:8080/miniproject/register", num);
   }


   set(num) {
      return this.a.post("http://localhost:8080/miniproject/admins", num);
   }

   get() {
      return this.a.get("http://localhost:8080/miniproject/data");
   }

   delete(num) {
      alert("hii");
      return this.a.post("http://localhost:8080/miniproject/delete",num);
   }
}
