import { Component, OnInit } from '@angular/core';
import { Materias } from 'app/Clases/Materias';
import { ActividadesExtra } from 'app/Clases/ActividadesExtra';
import { Companeros } from 'app/Clases/Companeros';
import { Perfil } from 'app/Clases/Perfil';
import { ServicioActividadesextraService} from 'app/Servicios/servicio-actividadesextra.service'
import { ServicioCompanerosService} from 'app/Servicios/servicio-companeros.service'
import { ServicioMateriaService} from 'app/Servicios/servicio-materia.service'
import { ServicioPerfilcomponenteService } from 'app/Servicios/servicio-perfilcomponente.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  habilitar: Boolean;
  EditarPerfil: String;
  Materias: Materias[]
  ActividadesExtra:ActividadesExtra[]
  perfil:Perfil;
  Companeros:Companeros[];
  mimateria:Materias
  miactividade: ActividadesExtra
  
  constructor(private ServicioPerfilComponente: ServicioPerfilcomponenteService) { 
    
    this.perfil=
      { 
        id:null,
        first_name:"",
        last_name:"",
        email:"",
        carr_estudiante:"",
        username:"",
        password:"",
      }

    this.mimateria={Nombre: "", Fecha: " "}
    this.miactividade={Nombre: "nombre", Fecha: "1/3/20"}
    this.habilitar=true
    this.EditarPerfil="Editar Perfil"
    this.Materias=[{Nombre: "nombre", Fecha: "1/3/20"}]
    this.ActividadesExtra=[{Nombre: "nombre", Fecha: "1/3/20"}]
    this.Companeros=[{Nombre: "nombre", Fecha: "1/3/20"}]
   
  }

  ngOnInit(): void {
    /*this.ServicioActividadesextra.getActividadesExtra().subscribe(
      data => { this.ActividadesExtra=data
      },
      err => console.error(err)
      )
    this.ServicioCompaneros.getCompaneros().subscribe(
      data => { this.Companeros=data
      },
      err => console.error(err)          
      )
    this.ServicioMaterias.getMaterias().subscribe(
      data => { this.Materias=data
      },
      err => console.error(err)          
      )*/
      this.ServicioPerfilComponente.getPerfil().subscribe(
        data => {this.perfil=data
        },
        err => console.error(err)
        )
  }
      

  EditarPerfilFunc(){
    this.EditarPerfil=this.EditarPerfil=== "Guardar" ? 'Editar Perfil' : 'Guardar'; 
    this.habilitar=this.habilitar=== true ? false: true;
    //this.estadoCuadro=this.estadoCuadro === 'estado1' ? 'estado2' : 'estado1';
  }

  EliminarM(mate:Materias){
    if (confirm('Esta seguro de eliminar la materia '+mate.Nombre+ '?')){
      this.mimateria=mate
    this.Materias =this.Materias.filter(x => x != this.mimateria)
    this.mimateria=new Materias()
    }
    console.log(this.mimateria.Nombre)
  }

  EliminarA(acte:ActividadesExtra){
    if (confirm('Esta seguro de eliminar la actividad '+acte.Nombre+ '?')){
      this.miactividade=acte
    this.ActividadesExtra =this.ActividadesExtra.filter(x => x != this.miactividade)
    this.miactividade=new Materias()
    }
    console.log(this.miactividade.Nombre)
  }

  
  /*crearPerfil(){
    this.ServicioPerfil.getPerfil()
    console.log('Se creo la perfil '+this.perfil.first_name)
    //this.ServicioPerfil.setActividad(this.actividad)
  }*/
}
