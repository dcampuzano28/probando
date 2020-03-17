import { Routes } from '@angular/router';
import { CalendarioComponent } from '../../Calendario/calendario.component';
import { CrearComponent } from 'app/crear/crear.component';
import { EliminarComponent } from 'app/eliminar/eliminar.component';
import { LoginComponent } from 'app/login/login.component';
import { RegistroComponent } from 'app/registro/registro.component';

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

];
