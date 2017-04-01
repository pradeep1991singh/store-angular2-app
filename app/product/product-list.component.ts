import { Component } from '@angular/core';

import { ProductsService } from './products.service';

declare const module;

@Component({
  selector: 'product-list',
  moduleId: module.id,
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductList { 

  constructor(private productsService: ProductsService) { }

}