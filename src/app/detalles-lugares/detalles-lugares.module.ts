import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesLugaresPageRoutingModule } from './detalles-lugares-routing.module';

import { DetallesLugaresPage } from './detalles-lugares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesLugaresPageRoutingModule
  ],
  declarations: [DetallesLugaresPage]
})
export class DetallesLugaresPageModule {}
