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
  id:string
  nombre:string
  jason:string[]
  constructor(private miServ:ServicioUsuarioService, private servT:ServicioTokenService) { 
    this.usuario=new Usuario
      this.miU={
        username: "",
        password: ""
      }
      this.id='123'
      this.nombre='vacio'
      this.jason=['hola']
  }

  ngOnInit(): void {
  }

  validarUsuario(){
    this.miServ.validarUsuarioBD(this.miU).subscribe(
      data => {
        
        //console.log('datosToquen: ',data.token)
        this.servT.setToken(data.token)
      },
      err => console.error(err)
      
      )
    this.servT.getIdUsuario(this.miU.username).subscribe(
      data => {
        console.log('posicion0',data[0].id)
        console.log('jason ',this.jason)
        this.jason=data
        console.log('jason ',this.jason)
        console.log('mi usuario: ',data)
        //console.log('mi toquen ',this.servT.getToken())
        //this.servT.setUsuario(data)
        //console.log('nombre ',data.first_name)
        this.nombre=data[0].username
        //console.log('id ',data.id)
        this.id=data[0].id
        //this.usuario=data[0]
        console.log('mi usuario ',this.usuario.username)
        console.log('username ',data[0].username)
        this.usuario.carr_estudiante=data[0].carr_estudiante
        this.usuario.email=data[0].email
        this.usuario.first_name=data[0].first_name
        this.usuario.id=data[0].id
        this.usuario.last_name=data[0].last_name
        this.usuario.password=data[0].password
        this.usuario.username=data[0].username
        console.log('se creo el usuario ', this.usuario)

      },
      err =>console.error(err),
      ()=>{console.log('se uso el getidusuario')
      //console.log('voy a enviar  el usuario: ',this.usuario)
      //this.servT.setUsuario(this.usuario)
      /*
      carr_estudiante: "vaganciaptforever"
​​
email: "johanwsss@gmail.com"
​​
first_name: "johan"
​​
id: 3
​​
last_name: "sanchez"
​​
password: "pbkdf2_sha256$180000$zaLqlgx5ksjS$Ji4PUgA1hAgpIQlyDnQBCjhvjNbpVWX73JV7GX8O3ew="
​​
username: "johanw"
      */
    })

    this.servT.setUsuario(this.usuario)
    console.log('este es el usuario que envio ',this.usuario)
  }

  stopPropagation(event){
    event.stopPropagation();
    
  }
  jsaonUsuario(data:any){

  }
}
