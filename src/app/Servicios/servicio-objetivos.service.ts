import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { Objetivo } from 'app/Clases/Objetivo';
import { ServicioTokenService } from './servicio-token.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioObjetivosService {
  private url = 'http://localhost:8000/aplicacion/objetivo/'

  constructor(protected http: HttpClient,private servT:ServicioTokenService) { }
  listarObjetivosget():Observable<any>{
    let id_estudiante=this.servT.getUsuario().id
    console.log('token resivido ',this.servT.getToken())
    console.log('idestudiante = ',id_estudiante)
    return this.http.get(this.url+'?id_estudiante='+id_estudiante)
  }
  
  actualizarObjetivo(objetivo:Objetivo):Observable<any>{
    
    let id=this.servT.getUsuario().id
    return this.http.put(this.url+'?id_estudiante='+id,objetivo)
  }
}
