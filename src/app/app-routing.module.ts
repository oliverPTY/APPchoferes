import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'ordenes/:ordenesId',
    loadChildren: () => import('./ordenes/ordenes.module').then( m => m.OrdenesPageModule)
  },
  {
    path: 'ordenesDetalles/:ordenesId',
    loadChildren: () => import('./ordenes/pages/detalle-orden/detalle-orden.module').then( m => m.DetalleOrdenPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
