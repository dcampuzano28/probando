import { Component, OnInit } from '@angular/core';
import { Objetivo } from '../Clases/Objetivo'
import { ServicioObjetivosService } from 'app/Servicios/servicio-objetivos.service';

@Component({
  selector: 'app-objetivos',
  templateUrl: './objetivos.component.html',
  styleUrls: ['./objetivos.component.css']
})
export class ObjetivosComponent implements OnInit {
  miObjetivo:Objetivo
  listaObjetivos:Objetivo[]
  botonSummit:string
  constructor(private miServ:ServicioObjetivosService) { 
    this.miObjetivo={
      des_objetivo:'',
      fecha_finalizacion:null,
      id_estudiante:null,
      id_objetivo:null,
      nom_objetivo:''
    }
    this.botonSummit='Nuevo'
    this.listaObjetivos=[{
      des_objetivo:'',
      fecha_finalizacion:null,
      id_estudiante:null,
      id_objetivo:1,
      nom_objetivo:'Bañarme'
    },{
      des_objetivo:'',
      fecha_finalizacion:null,
      id_estudiante:null,
      id_objetivo:2,
      nom_objetivo:'Levantarme de esta pereza'
    },{
      des_objetivo:'',
      fecha_finalizacion:null,
      id_estudiante:null,
      id_objetivo:3,
      nom_objetivo:'Jugar Minecraft'
    }]
  }

  ngOnInit(): void {
    this.miServ.listarObjetivosget().subscribe(
      data =>{
        this.listaObjetivos=data
    },
    err => console.log(err)),
    ()=>console.log('termino peticion de lista')

    
  }

  summit(obj:Objetivo){
    //this.botonSummit = this.botonSummit === 'Nuevo' ? 'Actualizar':'Nuevo';
    if(this.miObjetivo.id_objetivo===0&&this.miObjetivo.nom_objetivo!==undefined){
    this.miObjetivo.id_objetivo=this.listaObjetivos.length +1
    this.listaObjetivos.push(this.miObjetivo)
    console.log(this.miObjetivo.nom_objetivo, 'gola')

  }

  this.botonSummit='Nuevo'

    this.miObjetivo=new Objetivo()
    console.log(this.miObjetivo)
    


  }
  seleccionar(obj:Objetivo){
    this.miObjetivo=obj
    this.botonSummit='Actualizar'
    console.log(this.miObjetivo.nom_objetivo)

  }
  eliminar(obj:Objetivo){
    if (confirm('Esta seguro de eliminar el objetivo '+obj.nom_objetivo)){
      this.miObjetivo=obj
    this.listaObjetivos =this.listaObjetivos.filter(x => x != this.miObjetivo)
    this.miObjetivo=new Objetivo()
    }
    console.log(this.miObjetivo.nom_objetivo)
  }

}
