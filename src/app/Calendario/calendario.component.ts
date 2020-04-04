import { Component, OnInit } from '@angular/core';
import { ServicioActividadService } from 'app/Servicios/servicio-actividad.service';
//import { ActividadService } from '../Servicio/actividad.service';
import { Actividad } from '../Clases/Actividad'

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})

export class CalendarioComponent implements OnInit {
  hora7: any[]
  hora8: any[]
  hora9: any[]
  hora10: any[]
  hora11: any[]
  hora12: any[]
  hora13: any[]
  hora14: any[]
  hora15: any[]
  hora16: any[]
  hora17: any[]
  hora18: any[]
  hora19: any[]
  hora20: any[]
  hora21: any[]
  jsonres: any
  actividad: Actividad
  misActividades: Actividad[]
  hora: String = "";
  dia: String = "";

  constructor(private servicioActividad: ServicioActividadService) {
    this.misActividades = servicioActividad.getActividades();
    //this.actualizardesdeBD();// Aqui se llama el metodo donde la primera vez que se abra a la aplicacion se actualice la tablavista con los valores que de la BD
    this.inicializarTabla()
  }

  ngOnInit(): void {
    //this.ComparacionHora(this.hora);
    try {
      this.actividad = this.servicioActividad.getActividad();
      this.hora = ""
      this.dia = ""
    } catch (err) {
      console.log('Actividad Vacia')
    }
 

    this.servicioActividad.getBDActi2().subscribe(
      /*(actividadesBD) => {
        this.misActividades = JSON.parse(actividadesBD)
        }*/
      (ractividades: Actividad[]) => //this.jsonres=(JSON.stringify(ractividades[0]))
        this.misActividades=ractividades
    ); 
    //console.log('aqui va, tamaño arreglo: ' +this.jsonres[0]);
  }

  /*respuesta : any[] =[
    {
      "id_actividad": 1,
      "hora_actividad": "18",
      "dia_actividad": "lunes",
      "nom_actividad" : "Prueba",
      "des_actividad": "descripcion",
      "estado_actividad": false,
      "id_prioridad" :1,
      "id_estudiante":2
    },
  ]*/

  inicializarTabla() {
    this.hora7 = [
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
    ]
    this.hora8 = [
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
    ]
    this.hora9 = [
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
    ]
    this.hora10 = [
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
    ]
    this.hora11 = [
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
    ]
    this.hora12 = [
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
    ]
    this.hora13 = [
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
    ]
    this.hora14 = [
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
    ]
    this.hora15 = [
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
    ]
    this.hora16 = [
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
    ]
    this.hora17 = [
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
    ]
    this.hora18 = [
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
    ]
    this.hora19 = [
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
    ]
    this.hora20 = [
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
    ]
    this.hora21 = [
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
      {
        "nombre": "",
        "prioridad": 0,
        "descripcion": ""
      },
    ]

  }

  
  


  actualizardesdeBD() {

  }
  nuevaActividadTabla() {

  }
}
