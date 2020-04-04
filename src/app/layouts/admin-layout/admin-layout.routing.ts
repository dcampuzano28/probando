import { Routes } from '@angular/router';
/*import { CalendarioComponent } from '../../Calendario/calendario.component';
import { CrearComponent } from 'app/crear/crear.component';
import { EliminarComponent } from 'app/eliminar/eliminar.component';
import { ActividadCrearComponent } from 'app/actividad-crear/actividad-crear.component';
import { EditarComponent } from 'app/editar/editar.component';
import { RendimientoComponent } from 'app/rendimiento/rendimiento.component';*/
import { LoginComponent } from 'app/login/login.component';
import { PerfilComponent } from 'app/perfil/perfil.component';
import { PagprincipalComponent } from 'app/pagprincipal/pagprincipal.component';
import { RegistroComponent } from 'app/registro/registro.component';
import { Component } from '@angular/core';
import { ObjetivosComponent } from 'app/objetivos/objetivos.component';



export const AdminLayoutRoutes: Routes = [

   /* { path: 'calendario',     component: CalendarioComponent },
    { path: 'crear',          component: CrearComponent },
    { path: 'eliminar',       component: EliminarComponent },
    { path: 'actividadcrear',       component: ActividadCrearComponent },
    { path: 'editar', component: EditarComponent},
    { path: 'rendimiento', component: RendimientoComponent},*/
    { path: 'login',          component: LoginComponent },
    { path: 'registro',       component: RegistroComponent },
    { path: 'pagprincipal', component: PagprincipalComponent},
    { path: 'perfil', component: PerfilComponent}   ,
    { path: 'objetivos', component: ObjetivosComponent},
];
