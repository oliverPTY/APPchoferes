import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiUrlDatos: string = 'http://131.108.7.230:5088/apimoto/public/api/detalleorden';
  constructor(private http:HttpClient) { }

  datosClienete(id: string): Observable <Cliente[]>{
    const paramsCliente = `${this.apiUrlDatos}/${id}`;
    return this.http.get<Cliente[]>(paramsCliente);
  }

  Entregado(){

  }


  cancelado(){
    
  }





  }




