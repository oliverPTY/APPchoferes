import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.page.html',
  styleUrls: ['./detalle-orden.page.scss'],
})
export class DetalleOrdenPage implements OnInit {

  constructor(private servicio: ServiceService) { }

  ngOnInit() {

  }

}
