import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../Servicio/actividad.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})

export class CalendarioComponent implements OnInit {
  
hora7: any[] = [
  {
    "nombre": "Nombre de la actividad",
    "prioridad" : 1,
    "descripcion" : "Aca esta la descripcion de la actividad, Mensaje motivacional o lo que se eso"
  },
  {
    "nombre": "Nombre de la actividad",
    "prioridad" : 2,
    "descripcion" : "Aca esta la descripcion de la actividad, Mensaje motivacional o lo que se eso"
  },
  {
    "nombre": "Nombre de la actividad",
    "prioridad" : 3,
    "descripcion" : "Aca esta la descripcion de la actividad, Mensaje motivacional o lo que se eso"
  },
  {
    "nombre": "Nombre de la actividad",
    "prioridad" : 1,
    "descripcion" : "Aca esta la descripcion de la actividad, Mensaje motivacional o lo que se eso"
  },
  {
    "nombre": "Nombre de la actividad",
    "prioridad" : 2,
    "descripcion" : "Aca esta la descripcion de la actividad, Mensaje motivacional o lo que se eso"
  },
  {
    "nombre": "",
    "prioridad" : 0,
    "descripcion" :""
  },
  {
    "nombre": "Nombre de la actividad",
    "prioridad" : 1,
    "descripcion" : "Aca esta la descripcion de la actividad, Mensaje motivacional o lo que se eso"
  },
];

hora8: any[] = [
  {
    "nombre": "",
    "prioridad" : 0,
    "descripcion" :"" 
  },
  {
    "nombre": "Nombre de la actividad",
    "prioridad" : 2,
    "descripcion" : "Aca esta la descripcion de la actividad, Mensaje motivacional o lo que se eso"
  },
  {
    "nombre": "Nombre de la actividad",
    "prioridad" : 3,
    "descripcion" : "Aca esta la descripcion de la actividad, Mensaje motivacional o lo que se eso"
  },
  {
    "nombre": "Nombre de la actividad",
    "prioridad" : 1,
    "descripcion" : "Aca esta la descripcion de la actividad, Mensaje motivacional o lo que se eso"
  },
  {
    "nombre": "Nombre de la actividad",
    "prioridad" : 2,
    "descripcion" : "Aca esta la descripcion de la actividad, Mensaje motivacional o lo que se eso"
  },
  {
    "nombre": "Nombre de la actividad",
    "prioridad" : 3,
    "descripcion" : "Aca esta la descripcion de la actividad, Mensaje motivacional o lo que se eso"
  },
  {
    "nombre": "Nombre de la actividad",
    "prioridad" : 1,
    "descripcion" : "Aca esta la descripcion de la actividad, Mensaje motivacional o lo que se eso"
  },
];

hora9: any[] = [
  {
    "nombre": "",
    "prioridad" : 0,
    "descripcion" :"" 
  },
]

hora10: any[] = [
  {
    "nombre": "",
    "prioridad" : 0,
    "descripcion" :"" 
  },
]
hora11: any[] = [
  {
    "nombre": "",
    "prioridad" : 0,
    "descripcion" :"" 
  },
]
hora12: any[] = [
  {
    "nombre": "",
    "prioridad" : 0,
    "descripcion" :"" 
  },
]
hora13: any[] = [
  {
    "nombre": "",
    "prioridad" : 0,
    "descripcion" :"" 
  },
]
hora14: any[] = [
  {
    "nombre": "",
    "prioridad" : 0,
    "descripcion" :"" 
  },
]
hora15: any[] = [
  {
    "nombre": "",
    "prioridad" : 0,
    "descripcion" :"" 
  },
]
hora16: any[] = [
  {
    "nombre": "",
    "prioridad" : 0,
    "descripcion" :"" 
  },
]
hora17: any[] = [
  {
    "nombre": "",
    "prioridad" : 0,
    "descripcion" :"" 
  },
]
hora18: any[] = [
  {
    "nombre": "",
    "prioridad" : 0,
    "descripcion" :"" 
  },
]
hora19: any[] = [
  {
    "nombre": "",
    "prioridad" : 0,
    "descripcion" :"" 
  },
]
hora20: any[] = [
  {
    "nombre": "",
    "prioridad" : 0,
    "descripcion" :"" 
  },
]
hora21: any[] = [
  {
    "nombre": "",
    "prioridad" : 0,
    "descripcion" :"" 
  },
]

constructor(private actividadService: ActividadService) { }

  ngOnInit() {
  }

  
}

