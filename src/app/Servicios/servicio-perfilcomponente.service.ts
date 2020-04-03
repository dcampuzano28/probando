import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServicioPerfilcomponenteService {

  constructor(protected http: HttpClient) { }

  getPerfil(): Observable<any>{
    return this.http.get("http://localhost:8000/aplicacion/users/2")
  }
}
