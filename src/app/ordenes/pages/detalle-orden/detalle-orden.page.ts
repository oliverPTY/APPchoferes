import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.page.html',
  styleUrls: ['./detalle-orden.page.scss'],
})
export class DetalleOrdenPage implements OnInit {
  [x: string]: any;

  constructor(private servicio: ServiceService, private navCtrl: NavController) { }

  ngOnInit() {

  }
  irAtras() {
    this.navCtrl.back();
  }

}
