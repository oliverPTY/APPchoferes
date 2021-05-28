import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../interfaces/cliente';


@Injectable({
  providedIn: 'root'
})
export class VerificaClienteService {

 
  urlVerifiar: string = 'http://131.108.7.230:5088/apimoto/public/api/verificarcliente';

  constructor(private http:HttpClient) { }
  
  dar:string='1R1b4s1m1th'
  VerificacionCliente(id: Cliente,dar:string='1R1b4s1m1th'){
    const options = {
      headers: {
       'Content-Type': 'application/x-www-form-urlencoded'
     }
    }
    const verificarCli= `${this.urlVerifiar}/${id}/${this.dar}`;
    return this.http.put(verificarCli,options)  


}
}

