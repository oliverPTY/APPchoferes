import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../../interfaces/cliente';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../../../services/cliente.service';
import { switchMap } from 'rxjs/operators';
import { OrdenService } from '../../../../services/orden.service';
import { Ordenes } from '../../../../interfaces/orden.interface';
import { VerificaClienteService } from '../../../../services/verifica-cliente.service';

import {AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: [],
})
export class ClienteComponent implements OnInit{



hayError: Boolean=false;
datos: Cliente []=[];
Ordenes: Ordenes [] = [];
  constructor(public alertCtrl: AlertController,private clienterouter:ActivatedRoute , private clienteserv:ClienteService, private ordenes:OrdenService, private Verifivador:VerificaClienteService,public alertController: AlertController
    ,private navCtrl: NavController) { }
  
 

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
  confirmacion: boolean;

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
              this.clienteserv.Entregado(params.ordenesId,this.valor)
              .subscribe( async (response) =>{
                console.log('se Entrego El pedido');

                const alert = await this.alertController.create({
                  cssClass: 'my-custom-class',
                  header: 'Orden Entregada con Exito',
                  subHeader: '',
                  message: 'Preciona "OK" para continuar',
                  buttons: [{
                   text:'OK',
                   handler:() =>{
                    this.navCtrl.back();
                   }
                  }]
                });

                await alert.present();
              })

            })
           
          }
        }
      ]
      });
  
      await ElementodeAlerta.present();

    } 
  }
  



 async cancelado(){

    const ElementodeAlerta = await this.alertController.create({
      header: 'Desea Cancelar el Pedido?',
      message: 'Presione "Ok" Para Cancelar el Pedido',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
      },
      {
        text: 'Comfirmar',
        handler: () =>{
          this.clienterouter.params.subscribe(params =>{
            this.clienteserv.cancelado(params.ordenesId)
            .subscribe( async (response) =>{

              const alert = await this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Orden Cancelada con Exito',
                subHeader: '',
                message: 'Preciona "OK" para continuar',
                buttons: [{
                 text:'OK',
                 handler:() =>{
                  this.navCtrl.back();
                 }
                }]
              });
          
              await alert.present(); 
              

             
            })

          })
          
         
        }
      }
    ]
    });

    await ElementodeAlerta.present();

  }










 
  async data(){


    this.clienterouter.params.pipe(
        switchMap((params)=>
        this.Verifivador.VerificacionCliente(params.ordenesId))
      ).subscribe( async (paramss)=>{
        const alert = await this.alertCtrl.create({
          cssClass: 'my-custom-class',
          header: 'ADVERTENCIA',
          subHeader: 'USUARIO VERIFICADO CON EXITO',
          buttons: [
            {
              text:'ok',
              handler:()=>{
                window.location.reload()
              }
            }
          ]
          
        });
    
        await alert.present();
   
    
      },(err)=>{
      this.hayError=true
        this.Ordenes=[];
      })
      
    
   
     }
 
     
     
 
 
 
   
 
    
     
  }


