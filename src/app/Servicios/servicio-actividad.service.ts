import { Injectable } from '@angular/core';
import { Actividad } from '../Clases/Actividad';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'


@Injectable()
export class ServicioActividadService {

  private url="C:\Users\Johan\Documents\Sergio Arboleda\Semestre 9\SW2\material-dashboard-angular2-master\material-dashboard-angular2-master\src\app\BD\actividades.json"
  private misActividades:Actividad[]
  
  constructor(protected http:HttpClient) { 
    this.misActividades=[]
  }
  setActividad(actividades:Actividad[]){
    this.misActividades=actividades
  }

  getActividades(){
    return this.misActividades
  }
  getBDActividades():Observable<Actividad[]>{
    return this.http.get<Actividad[]>(this.url).do(data => console.log('All: '+ JSON.stringify(data))).catch(this.handleError);
  }
  private handleError(err:HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message)
  }
  agregarActividad(actividad:Actividad){
    this.misActividades.push(actividad)
  }
  nuevaActividad():Actividad{
      return {
        nombre: '',
        dia: '',
        estado: false,
        descripcion: "",
        hora:null
      };
  }
  addActividad(actividad: Actividad): Observable<any>{
    let json = JSON.stringify(actividad);
    let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
     
    return this.http.post(this.url+'productos', params, {headers: headers});
}

}
