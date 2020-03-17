import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nombres:String
  apellidos:String
  usuario:String
  correoelectronico:String
  carrera:String
  genero:String
  contrasena:String
  recontrasena:String

  constructor() { }

  ngOnInit(): void {
  }
  validarRegistro(){
    console.log("Se registro: "+this.nombres)
  }


}
