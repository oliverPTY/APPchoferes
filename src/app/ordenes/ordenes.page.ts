import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.page.html',
  styleUrls: ['./ordenes.page.scss'],
})
export class OrdenesPage implements OnInit {

  constructor(private ValorRouter: ActivatedRoute, private serviceAPP: ServiceService) { }

  ordenes: number [] = [];
  ngOnInit(): void {
   
   this.ValorRouter.params.pipe(
    switchMap((params)=>
       this.serviceAPP.OrdenesPendientes(params.ordenesId))
   ).subscribe(paramss =>{
     this.ordenes= paramss;
   })

  }

}


