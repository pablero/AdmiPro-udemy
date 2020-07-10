import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins();

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
    init_plugins();
  }

  iniciar(){
    /* console.log('si paso'); */
    this.ruta.navigate([ '/dashboard' ]);
  }

}
