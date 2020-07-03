import { Injectable } from '@angular/core';
import { PRODUCTOS } from './productos.json';
import { Productos } from './productos';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url: string = 'http://localhost:8080/cloudforall/productos'

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Productos[]> {
    // return of(PRODUCTOS);
    return this.http.get<Productos[]>(this.url);
  }

}
