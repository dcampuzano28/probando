import { Injectable } from '@angular/core';
import { Usuario } from '../Clases/Usuario';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {

  miusuario:Usuario
  private url = "http://localhost:8000/aplicacion/actividad/"

  getUsuario(){
    return this.miusuario
  }
  setUsuario(usuario:Usuario){
    this.miusuario=usuario
  }
  constructor(protected http:HttpClient) { }

  nuevousuario():Usuario{
    return{
      id_estudiante:null,
      nom_estudiante:"",
      ap_estudiante:"",
      correo_estudiante:"",
      car_estudiante:"",
      nom_usuario:"",
      con_usuario:""
    }
  }

  addUsuarioBD(usuario: Usuario): Observable<any>{
    let json = JSON.stringify(usuario);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.url, json, {headers: headers});
}
}

