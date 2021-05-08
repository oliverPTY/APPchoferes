import { Component, Input } from '@angular/core';
import { Ordenes } from '../../interfaces/orden.interface';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: [],
})
export class OrdenComponent {

@Input () User:Ordenes;

}
