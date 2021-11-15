import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageModule } from './login/login.module';

import {  HttpClientModule } from '@angular/common/http';
import { OrdenesPageModule } from './ordenes/ordenes.module';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Geolocation } from '@ionic-native/geolocation/ngx';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  entryComponents: [

  ],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    LoginPageModule,
    OrdenesPageModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
    

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Geolocation
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
