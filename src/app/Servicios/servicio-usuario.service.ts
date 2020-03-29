import { Injectable } from '@angular/core';
import { Usuario } from '../Clases/Usuario';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {

  miusuario: Usuario
  private url = "http://localhost:8000/registro/"

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
        "id":null,
        "first_name": "Laura",
        "last_name": "Parada",
        "username": "laupa",
        "email": "ejemplolau@ejemplo.com",
        "password": "12345678",
        "gen_estudiante": "F",
        "carr_estudiante": "Ingenieria"
      
    }
  }

  addUsuarioBD(usuario: Usuario): Observable<any> {
    let json = JSON.stringify(usuario);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url, json, { headers: headers });
  }
}

