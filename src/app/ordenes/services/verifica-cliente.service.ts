import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VerificaClienteService {

private keys:string='1R1b4s1m1th'
private apiUrl: string = ' http://131.108.7.230:5088/apimoto/public/api/verificarcliente';
constructor(private http:HttpClient) { }
 
validar(id:string){
  const verificar = `${this.apiUrl}/${id}/${this.keys}`;
  return this.http.get<any>(verificar);
}


}

