import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../../interfaces/cliente';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../../../services/cliente.service';
import { switchMap } from 'rxjs/operators';
import { OrdenService } from '../../../../services/orden.service';
import { Ordenes } from '../../../../interfaces/orden.interface';
import { VerificaClienteService } from '../../../../services/verifica-cliente.service';
import { ThrowStmt } from '@angular/compiler';

import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: [],
})
export class ClienteComponent implements OnInit{
hayError: Boolean=false;
datos: Cliente []=[];
Ordenes: Ordenes [] = [];
  constructor(private clienterouter:ActivatedRoute , private clienteserv:ClienteService, private ordenes:OrdenService, private Verifivador:VerificaClienteService,public alertController: AlertController) { }
  
 

  ngOnInit() {

    this.clienterouter.params.pipe(
      switchMap((params)=>
      this.clienteserv.datosClienete(params.ordenesId))
    ).subscribe(paramss=>{
      this.datos=paramss;
    },(err)=>{
      this.hayError=true
      this.datos=[];
    })
  
  }

  
  ionViewWillEnter() {

    this.clienterouter.params.pipe(
      switchMap((params)=>
      this.clienteserv.datosClienete(params.ordenesId))
    ).subscribe(paramss=>{
      this.datos=paramss;
    },(err)=>{
      this.hayError=true
      this.datos=[];
    })
    
  }



  valor: string= '';

  async entregad(){


    if(this.valor == ''){

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error al Entregar Pedido',
        subHeader: '',
        message: 'Seleccione un metodo de pago.',
        buttons: ['OK']
      });
  
      await alert.present();
    }else{

      const ElementodeAlerta = await this.alertController.create({
        header: 'El Pedido fue Entregado?',
        message: 'Esta por dar por entragado el pedido',
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Entregado',
          handler: () =>{
          
            this.clienterouter.params.subscribe(params =>{
              console.log(params.ordenesId);
              
            })
           
  
           console.log('entregado');
           console.log(this.valor);
           
          }
        }
      ]
      });
  
      await ElementodeAlerta.present();

    }
  }
  
 
id:string='000000044'

  data(prueba){
    console.log(prueba)
   
      this.Verifivador.validar(this.id)
    .subscribe(paramsss=>{
      this.datos=paramsss;
    },(err)=>{
      this.hayError=true
      this.datos=[];
    })
    }
    
     
  }


