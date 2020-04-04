import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { Perfil } from 'app/Clases/Perfil';

@Injectable({
  providedIn: 'root'
})
export class ServicioPerfilcomponenteService {

  private url="http://localhost:8000/aplicacion/users/"

  constructor(protected http: HttpClient) { }

  getPerfil(): Observable<any>{
    return this.http.get(this.url+"2/")
  }

  putPerfil(perfil: Perfil): Observable<Perfil>{
    return this.http.put<Perfil>(this.url+"2/",perfil)
  }
}
