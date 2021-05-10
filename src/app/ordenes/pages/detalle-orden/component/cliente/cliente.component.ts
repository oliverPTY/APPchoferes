import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../../interfaces/cliente';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../../../services/cliente.service';
import { switchMap } from 'rxjs/operators';
import { OrdenService } from '../../../../services/orden.service';
import { Ordenes } from '../../../../interfaces/orden.interface';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: [],
})
export class ClienteComponent implements OnInit {
hayError: Boolean=false;
datos: Cliente []=[];
Ordenes: Ordenes [] = [];
  constructor(private clienterouter:ActivatedRoute , private clienteserv:ClienteService, private ordenes:OrdenService) { }

  ngOnInit(): void {

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

}
