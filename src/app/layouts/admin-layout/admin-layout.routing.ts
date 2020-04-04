import { Routes } from '@angular/router';
import { CalendarioComponent } from '../../Calendario/calendario.component';
import { CrearComponent } from 'app/crear/crear.component';
import { EliminarComponent } from 'app/eliminar/eliminar.component';
import { LoginComponent } from 'app/login/login.component';
import { RegistroComponent } from 'app/registro/registro.component';
import { ActividadCrearComponent } from 'app/actividad-crear/actividad-crear.component';
import { EditarComponent } from 'app/editar/editar.component';
import { RendimientoComponent } from 'app/rendimiento/rendimiento.component';
import { PagprincipalComponent } from 'app/pagprincipal/pagprincipal.component';
import { Component } from '@angular/core';
import { ObjetivosComponent } from 'app/objetivos/objetivos.component';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }

    { path: 'calendario',     component: CalendarioComponent },
    { path: 'crear',          component: CrearComponent },
    { path: 'eliminar',       component: EliminarComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'registro',       component: RegistroComponent },
    { path: 'actividadcrear',       component: ActividadCrearComponent },
    { path: 'editar', component: EditarComponent},
    { path: 'pagprincipal', component: PagprincipalComponent},
    { path: 'rendimiento', component: RendimientoComponent},
    { path: 'objetivos', component: ObjetivosComponent},
    

];
