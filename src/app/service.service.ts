import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl: string = 'http://131.108.7.230:5088/apimoto/public/api/usermotologin';
  constructor(private http:HttpClient) { }
   
  validar(user:string, pass:string){
    const params = `${this.apiUrl}/${user}/${pass}`;
    return this.http.get(params);
  
  }
}
