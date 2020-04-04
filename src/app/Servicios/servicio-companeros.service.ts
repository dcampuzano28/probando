import { Injectable } from '@angular/core';
import { Companeros } from '../Clases/Companeros';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

@Injectable({
  providedIn: 'root'
})
export class ServicioCompanerosService {

  private url = "http://localhost:8000/aplicacion/actividad/"

  constructor(protected http:HttpClient) { 
  }

  getCompaneros(): Observable<any>{
    return this.http.get(this.url)
  }
}
