import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ordenes } from '../interfaces/orden.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  apiUrlOrdenes: string = 'http://131.108.7.230:5088/apimoto/public/api/ordmotoasig';
  constructor(private http:HttpClient) { }
  OrdenesPendientes(id: string): Observable <Ordenes[]>{
    const paramsOrdenes = `${this.apiUrlOrdenes}/${id}`;
    return this.http.get<Ordenes[]>(paramsOrdenes);

  }
}
