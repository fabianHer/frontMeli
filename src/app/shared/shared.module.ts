import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';

import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';



@NgModule({
    declarations: [
      HeaderComponent,
      BreadcrumbsComponent
    ],
    exports: [
      HeaderComponent,
      BreadcrumbsComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      PipesModule
    ]
  })
  export class SharedModule { }
  