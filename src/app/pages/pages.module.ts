import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modulos
import { SharedModule } from '../shared/shared.module';

import { PipesModule } from '../pipes/pipes.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';


@NgModule({
  declarations: [
   DashboardComponent,
   PagesComponent,
   BusquedaComponent,
   DetalleProductoComponent
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    BusquedaComponent,
    DetalleProductoComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    PipesModule
  ]
})
export class PagesModule { }
