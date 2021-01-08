import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment";
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class AcsQueryService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getAll() {
      //return this.baseUrl;
      return this.http.get(`${this.baseUrl}/getAll.php`);
      
  }

}
