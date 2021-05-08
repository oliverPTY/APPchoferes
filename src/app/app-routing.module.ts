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
    path: 'ordenes',
    children: [
      {
        path: '',
        loadChildren: () => import('./ordenes/ordenes.module').then( m => m.OrdenesPageModule)

      },
      {
        path: ':ordenesId',
        loadChildren: () => import ('./ordenes/pages/datos-cliente/datos-cliente.module').then (m => m.DatosClientePageModule )
      }

    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
