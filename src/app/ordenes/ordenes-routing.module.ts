import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdenesPage } from './ordenes.page';

const routes: Routes = [
  {
    path: '',
    component: OrdenesPage
  },  {
    path: 'detalle-orden',
    loadChildren: () => import('./pages/detalle-orden/detalle-orden.module').then( m => m.DetalleOrdenPageModule)
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdenesPageRoutingModule {}
