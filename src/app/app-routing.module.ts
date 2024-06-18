import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { IniciarSesionComponent } from './seguridad/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './inicio/inicio.component';
import { PrincipalComponent } from './inicio/principal/principal.component';


const routes: Routes = [
  { path: '', redirectTo: '/seguridad/iniciar-sesion', pathMatch: 'full' },
  {
    path: 'seguridad', component: SeguridadComponent,
    children: [
      { path: 'iniciar-sesion', component: IniciarSesionComponent },
    ]
  },

   {
     path: 'inicio', component: InicioComponent,
     children: [
       { path: 'principal', component: PrincipalComponent },
     ]
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
