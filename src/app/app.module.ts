import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { CalendarioComponent } from './Calendario/calendario.component';
<<<<<<< HEAD
import {AgmCoreModule} from '@agm/core';
=======
import { AgmCoreModule } from '@agm/core';
>>>>>>> bf961e017a47a7df391cc9d32321bc7674c65fb6
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CrearComponent } from './crear/crear.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
<<<<<<< HEAD
import { ServicioActividadService } from './Servicios/servicio-actividad.service';
import { ServicioUsuarioService } from './Servicios/servicio-usuario.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditarComponent } from './editar/editar.component';
import { RendimientoComponent } from './rendimiento/rendimiento.component';
import { PagprincipalComponent } from './pagprincipal/pagprincipal.component';


=======
import { ActividadService } from './Servicio/actividad.service';
import { PrioridadesComponent } from './prioridades/prioridades.component';
>>>>>>> bf961e017a47a7df391cc9d32321bc7674c65fb6

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
    PrioridadesComponent,
  ],
<<<<<<< HEAD
  providers: [ServicioActividadService, ServicioUsuarioService],
=======
  providers: [ActividadService],
>>>>>>> bf961e017a47a7df391cc9d32321bc7674c65fb6
  bootstrap: [AppComponent]
})
export class AppModule { }
