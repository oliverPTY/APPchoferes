import { Component, OnInit } from '@angular/core';
import { Ordenes } from '../../interfaces/orden.interface';
import { ActivatedRoute } from '@angular/router';
import { OrdenService } from '../../services/orden.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: [],
})
export class OrdenComponent implements OnInit  {

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