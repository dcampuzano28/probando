import { Component, OnInit } from '@angular/core';
import { Materias } from 'app/Clases/Materias';
import { ActividadesExtra } from 'app/Clases/ActividadesExtra';
import { Companeros } from 'app/Clases/Companeros';
import { Perfil } from 'app/Clases/Perfil';
import { ServicioActividadesextraService} from 'app/Servicios/servicio-actividadesextra.service'
import { ServicioCompanerosService} from 'app/Servicios/servicio-companeros.service'
import { ServicioMateriaService} from 'app/Servicios/servicio-materia.service'
import { ServicioPerfilService} from 'app/Servicios/servicio-perfil.service'

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
  Perfil:Perfil;
  Companeros:Companeros[];
  constructor(private ServicioActividadesextra:ServicioActividadesextraService,private ServicioMaterias:ServicioMateriaService, private ServicioCompaneros: ServicioCompanerosService, private ServicioPerfil: ServicioPerfilService) { 
    /*this.Perfil.Nombre=""
    this.Perfil.Carrera=""
    this.Perfil.Correo=""
    this.Perfil.NombreUsuario=""*/
    this.habilitar=true
    this.EditarPerfil="Editar Perfil"
    this.Materias=[{Nombre: "nombre", Fecha: "1/3/20"}]
    this.ActividadesExtra=[{Nombre: "nombre", Fecha: "1/3/20"}]
    this.Companeros=[{Nombre: "nombre", Fecha: "1/3/20"}]
  }

  ngOnInit(): void {
    this.ServicioActividadesextra.getActividadesExtra().subscribe(
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
      )
    this.ServicioPerfil.getPerfil().subscribe(
      data => { this.Perfil=data
      },   
      err => console.error(err)            
      )
  }
      

  EditarPerfilFunc(){
    this.EditarPerfil=this.EditarPerfil=== "Guardar" ? 'Editar Perfil' : 'Guardar'; 
    this.habilitar=this.habilitar=== true ? false: true;
    //this.estadoCuadro=this.estadoCuadro === 'estado1' ? 'estado2' : 'estado1';
  }

}
