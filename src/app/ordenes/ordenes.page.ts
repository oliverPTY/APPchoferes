import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { OrdenService } from './services/orden.service';
import { Ordenes } from './interfaces/orden.interface';


@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.page.html',
  styleUrls: ['./ordenes.page.scss'],
})
export class OrdenesPage {

    hayError: boolean=false;
    ordenes: Ordenes [] = [];
  
    constructor(private ValorRouter: ActivatedRoute, private serviceAPP: OrdenService ) { }
  
   
    ngOnInit(): void {
     
     this.ValorRouter.params.pipe(
      switchMap((params)=>
         this.serviceAPP.OrdenesPendientes(params.ordenesId))
     ).subscribe(paramss =>{
       this.ordenes= paramss;
  
     },(err)=>{
  this.hayError=true
  this.ordenes=[];
     })
  
  
  
    }
  
  
}


