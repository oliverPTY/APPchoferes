import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //DETALLE DE LA ORDEN
  apiUrlDatos: string = 'http://131.108.7.230:5088/apimoto/public/api/detalleorden';
  constructor(private http:HttpClient) { }

  datosClienete(id: string): Observable <Cliente[]>{
    const paramsCliente = `${this.apiUrlDatos}/${id}`;
    return this.http.get<Cliente[]>(paramsCliente);
  }


   //ENTREGADO
  apiEtregadoURL: string = 'http://131.108.7.230:5088/apimoto/public/api/ordenupdate';
  
  Entregado(idOrden: string , metodo: string){
  const paramsEntregado = `${this.apiEtregadoURL}/${idOrden}/4/${metodo}`;
  const obj = {
    Headers:{
      'Content-Type': 'application/x-ww-form-urlencoded'
    }
  }
  return this.http.put(paramsEntregado,obj);
  }
  


  //CANCELADO
  apiCanceladoURL: string = 'http://131.108.7.230:5088/apimoto/public/api/ordenupdate';
  ninguno: string = 'Ninguna';  
  cancelado(idorden: string){

    const paramsEntregado = `${this.apiEtregadoURL}/${idorden}/5/${this.ninguno}`;
  const obj = {
    Headers:{
      'Content-Type': 'application/x-ww-form-urlencoded'
    }
  }
  return this.http.put(paramsEntregado,obj);
  }
    
  




}





  




