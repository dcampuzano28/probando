import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
/*import { CalendarioComponent } from '../../Calendario/calendario.component';
import { CrearComponent } from '../../crear/crear.component';
import { EliminarComponent } from '../../eliminar/eliminar.component';
import { ActividadCrearComponent } from 'app/actividad-crear/actividad-crear.component';
import { RendimientoComponent } from 'app/rendimiento/rendimiento.component';
import { LoginComponent } from '../../login/login.component';*/
import { RegistroComponent } from '../../registro/registro.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { PagprincipalComponent } from 'app/pagprincipal/pagprincipal.component';
import { PerfilComponent } from 'app/perfil/perfil.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    /*CalendarioComponent,
    CrearComponent,
    EliminarComponent,
    LoginComponent,
    ActividadCrearComponent,
    RendimientoComponent,*/
    RegistroComponent,
    PagprincipalComponent,
    PerfilComponent,
  ]
})

export class AdminLayoutModule {}
