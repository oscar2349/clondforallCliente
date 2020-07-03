import { Component, OnInit } from '@angular/core';
import { Productos } from './productos';
import { ProductosService } from './productos.service';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  productos: Productos[]
  constructor(private ProductoService: ProductosService) { }

  ngOnInit(): void {
    this.ProductoService.getProductos().subscribe(

      productos => this.productos = productos
    );
  }

}
