import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { CalendarioComponent } from './Calendario/calendario.component';
import {AgmCoreModule} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CrearComponent } from './crear/crear.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ServicioActividadService } from './Servicios/servicio-actividad.service';
import { ServicioUsuarioService } from './Servicios/servicio-usuario.service';
import { ServicioActividadesextraService } from './Servicios/servicio-actividadesextra.service';
import { ServicioMateriaService } from './Servicios/servicio-materia.service';
import { ServicioCompanerosService } from './Servicios/servicio-companeros.service';
import { ServicioPerfilService } from './Servicios/servicio-perfil.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditarComponent } from './editar/editar.component';
import { RendimientoComponent } from './rendimiento/rendimiento.component';
import { PagprincipalComponent } from './pagprincipal/pagprincipal.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  providers: [ServicioActividadService, ServicioUsuarioService, ServicioActividadesextraService,ServicioCompanerosService,ServicioMateriaService, ServicioPerfilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
