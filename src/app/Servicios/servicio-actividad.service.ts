import { Injectable } from '@angular/core';
import { Actividad } from '../Clases/Actividad';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ServicioActividadService {

  misActividades:Actividad[]
  
  constructor() { 
    this.misActividades=[]
  }
  setActividad(actividades:Actividad[]){
    this.misActividades=actividades
  }
  /*getActividades():Observable<Actividad[]>{
    return of()
  }*/
  getActividades(){
    return this.misActividades
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
}
