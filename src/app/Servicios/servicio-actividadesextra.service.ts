import { Injectable } from '@angular/core';
import { ActividadesExtra } from '../Clases/ActividadesExtra';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

@Injectable({
  providedIn: 'root'
})
export class ServicioActividadesextraService {

  private url = "http://localhost:8000/aplicacion/actividad/"

  constructor(protected http:HttpClient) { 
  }

  getActividadesExtra(): Observable<any>{
    return this.http.get(this.url)
  }
}
