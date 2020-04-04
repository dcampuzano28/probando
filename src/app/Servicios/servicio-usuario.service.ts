import { Injectable } from '@angular/core';
import { Usuario } from '../Clases/Usuario';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { validarUsuario } from 'app/Clases/validarUsuario';


@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {
  validarUsuario:validarUsuario
  miusuario: Usuario
  private url = "http://localhost:8000/aplicacion/users/"
  private a ="http://localhost:8000/aplicacion/auth/"
  getUsuario() {
    return this.miusuario
  }
  setUsuario(usuario: Usuario) {
    this.miusuario = usuario
  }
  constructor(protected http: HttpClient) { }

  nuevousuario(): Usuario {
    return {
      /*first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
      gen_estudiante: "F",
      carr_estudiante: ""*/
        "id":123,
        "first_name": "Laura",
        "last_name": "Parada",
        "username": "laupa",
        "email": "ejemplolau@ejemplo.com",
        "password": "12345678",
        "carr_estudiante":""
        
        
      
    }
  }

  addUsuarioBD(usuario: Usuario): Observable<any> {
    let json = JSON.stringify(usuario);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    //let headers2 = new HttpHeaders().set('Content-Type', 'application/json','Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods': 'POST')
    return this.http.post(this.url, json, { headers: headers });
  }
  validarUsuarioBD(valUsu:validarUsuario):Observable<any>{
    //let headers = new HttpHeaders().set('Content-Type', "Access-Control-Allow-Origin:*");
    let headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
    return this.http.post(this.a,valUsu)
  }
}

