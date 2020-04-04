import { Injectable } from '@angular/core';
import { Usuario } from 'app/Clases/Usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioTokenService {
private token:string
private miUsuario:Usuario
  constructor(protected http: HttpClient) { }
  getToken(){
    return this.token
  }
  getUsuario(){
    return this.miUsuario
  }
  setToken(nuevoToken:string){
      this.token=nuevoToken
  }
  setUsuario(usuario:Usuario){
    this.miUsuario=usuario

  }
  getjson():Observable<any>{
    return this.http.get('BD/actividades.json')
  }

  getIdUsuario(username:string):Observable<Usuario>{
    return this.http.get<Usuario>('http://localhost:8000/aplicacion/users/?username='+username)
  }

}
