import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'lugares',
    pathMatch: 'full'
  },
  {
    path: 'lugares',
    children: [
      {
        path: '',
        loadChildren: () => import('./lugares/lugares.module').then( m => m.LugaresPageModule)
      },
      {
        path: ':lugaresId',
        loadChildren: () => import('./lugares/detalles/detalles.module').then( m => m.DetallesPageModule)
      },
    ]
  },
  {
    path: 'detalles-lugares',
    loadChildren: () => import('./detalles-lugares/detalles-lugares.module').then( m => m.DetallesLugaresPageModule)
  },
  // {
  //   path:'nuevo-lugar',
  //   loadChildren: () => import('./lugares/nuevo-lugar/nuevo-lugar.module').then(m => m.NuevoLugarPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
