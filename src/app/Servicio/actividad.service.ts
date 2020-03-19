import { Injectable } from '@angular/core';
//import { Actividad } from '../Clases/Actividad';
import { CalendarioComponent } from '../Calendario/calendario.component';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ActividadService {

  constructor() { }
  ngOnInit(): void {
  }
}

  /*misActividades:CalendarioComponent[]
  
  constructor() { 
    this.misActividades=[]
  }
  setActividad(actividades:CalendarioComponent[]){
    this.misActividades=actividades
  }
  /*getActividades():Observable<Actividad[]>{
    return of()
  }
  getActividades(){
    return this.misActividades
  }
  agregarActividad(actividad:CalendarioComponent){
    this.misActividades.push(actividad)
  }
  nuevaActividad():CalendarioComponent{
      return {
        nombre: '',
        dia: '',
        estado: false,
        descripcion: "",
        hora:null
      };
  }
}*/

