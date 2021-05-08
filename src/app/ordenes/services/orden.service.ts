import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ordenes } from '../interfaces/orden.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {


  private apiurl:string='http://131.108.7.230:5088/apimoto/public/api/ordmotoasig'

  constructor(private http:HttpClient) { }


  getPedidos() : Observable<Ordenes['idorden']>{
const url =` ${this.apiurl}/userid/`;
return this.http.get<Ordenes['idorden']>(url);

  }
}
