import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombreUsuario:String
  contrasena:String


  constructor() { }

  ngOnInit(): void {
  }

  validarUsuario(){
    console.log("El usuario es: "+this.nombreUsuario+" y su constraseña es: "+this.contrasena)
  }

}
