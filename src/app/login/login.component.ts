import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public ruta: Router) {
    /* console.log('por constructor'); */
   }

  ngOnInit(): void {
  }

  iniciar(){
    /* console.log('si paso'); */
    this.ruta.navigate([ '/dashboard' ]);
  }

}
