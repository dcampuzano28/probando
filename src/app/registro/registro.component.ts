import { Component, OnInit } from '@angular/core';
import { ServicioUsuarioService } from 'app/Servicios/servicio-usuario.service';
import { Usuario } from 'app/Clases/Usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  recontrasena:String
  miusuario:Usuario

  constructor(private serviciousuario: ServicioUsuarioService) { }

  ngOnInit(): void {
    this.miusuario=this.serviciousuario.nuevousuario()
  }
  validarRegistro(){
    if(this.recontrasena=this.miusuario.con_usuario){
      console.log("Se registro: "+this.miusuario.nom_estudiante)
      this.enviarRegistro()
    }else{
      console.log("Error, las contraseñas no son iguales")
    }
  }

  enviarRegistro(){
    this.serviciousuario.addUsuarioBD(this.miusuario)
  }
}
