import { Component, OnInit } from '@angular/core';

import { AcsQueryService } from '../../acs-query.service';
import { User } from "../../user";
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public users: User[] = [
    new User("Maggie", 2, "Chihuahua", "dd", "img",20),
    new User("Maggie2", 2, "Chihuahua", "dd", "img",20)
  ];
  public cadena:string ="prueba";

  constructor(private acsQueryService: AcsQueryService) { }

  ngOnInit(): void {
    this.obtenerUser();
    //console.log(this.acsQueryService.getAll().subscribe((users: User[]) => this.users = users));
  }

  obtenerUser() {  
    //this.cadena= this.acsQueryService.getAll();
    this.acsQueryService.getAll().subscribe((users: User[]) => this.users = users);
    
  }
}

