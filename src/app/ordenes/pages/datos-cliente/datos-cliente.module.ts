import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosClientePageRoutingModule } from './datos-cliente-routing.module';

import { DatosClientePage } from './datos-cliente.page';
import { ComponentesUsuarioComponent } from './component/componentes-usuario/componentes-usuario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosClientePageRoutingModule
  ],
  declarations: [DatosClientePage,ComponentesUsuarioComponent]
})
export class DatosClientePageModule {}
