import { Injectable } from '@angular/core';
import { Actividad } from '../Clases/Actividad';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'


@Injectable()
export class ServicioActividadService {

//  private url="C:\Users\Johan\Documents\Sergio Arboleda\Semestre 9\SW2\material-dashboard-angular2-master\material-dashboard-angular2-master\src\app\BD\actividades.json"
  private url = "http://localhost:8000/aplicacion/api/aplicacion/actividad"
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
        nom_actividad: '',
        dia_actividad: '',
        esta_actividad: false,
        des_actividad: "",
        hora_actividad: null,
        id_prioridad: null,
      };
  }
  addActividad(actividad: Actividad): Observable<any>{
    let json = JSON.stringify(actividad);
    /*  json1: [{
      "hora_actividad":actividad.hora_actividad,
      "dia_actividad":actividad.dia_actividad,
      "nom_actividad":actividad.nom_actividad,
      "des_actividad":actividad.des_actividad,
      "esta_actividad":actividad.esta_actividad,
      "id_prioridad":actividad.id_prioridad
    }]*/
    //let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
     
    return this.http.post(this.url, json, {headers: headers});
}

}
