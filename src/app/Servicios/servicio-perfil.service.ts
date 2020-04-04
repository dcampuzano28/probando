import { Injectable } from '@angular/core';
import { Perfil } from '../Clases/Perfil';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

@Injectable({
  providedIn: 'root'
})
export class ServicioPerfilService {

  private url = "http://localhost:8000/aplicacion/actividad/"

  constructor(protected http:HttpClient) { 
  }

  getPerfil(): Observable<any>{
    return this.http.get(this.url)
  }
}
