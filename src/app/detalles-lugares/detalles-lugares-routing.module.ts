import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesLugaresPage } from './detalles-lugares.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesLugaresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesLugaresPageRoutingModule {}
