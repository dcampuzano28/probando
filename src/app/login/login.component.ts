import { Component, OnInit } from '@angular/core';
import { validarUsuario } from 'app/Clases/validarUsuario';
import { ServicioUsuarioService } from 'app/Servicios/servicio-usuario.service';
import { ServicioTokenService } from 'app/Servicios/servicio-token.service';
import { Usuario } from 'app/Clases/Usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  miU:validarUsuario
  usuario:Usuario
  miToken:string
  id:string
  nombre:string
  listausu:Usuario[]
  
  v:validarUsuario
  constructor(private miServ:ServicioUsuarioService, private servT:ServicioTokenService) { 
    this.usuario=new Usuario()
      this.miU={
        username: "",
        password: ""
      }
      this.id='123'
      this.nombre='nombre'
      this.miToken='token'
      
  }

  ngOnInit(): void {
  }

  validarUsuario(){

    this.miServ.validarUsuarioBD(this.miU).subscribe(
      data => {
        this.miToken=data
      },
      err => console.error(err),
      ()=>console.log('Se uso el validarUsuarioBD'))
      console.log('antes de igualar ',this.usuario)
    this.servT.getIdUsuario(this.miU.username).subscribe(
      (data) => {
        
        (this.usuario=data)
        console.log('response: ',data)
        this.nombre=this.usuario.username
        this.id=this.usuario.id+''
        console.log('despues de igualar ',this.usuario)
      },
      err =>console.error(err),
      ()=>{console.log('se uso el getidusuario')})

    }

  stopPropagation(event){
    event.stopPropagation();
    
  }

}
