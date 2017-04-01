import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { PRODUCTS } from './products';

@Injectable()
export class ProductsService {

  products = [];

  constructor() {
    this.loadProducts();
  }

  loadProducts() {
    this.products = PRODUCTS;
  }  

  // @todo: implement/fix express server
  // constructor(http: Http) {
  //   this.loadProducts();
  // }

  // loadProducts() {
  //   this.http.get('/products')
  //       .map(res => res.json)
  //       .subscribe(
  //         productsData => this.products = productsData,
  //         err => console.log(err)
  //       );
  // }

  // createProduct(product) {
  //   this.products.push(product);

  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json; charset=utf-8');

  //   this.http.post('/products', JSON.stringify(product), headers)
  //       .subscribe(
  //         () => {},
  //         err => console.log(err)
  //       );
  // }

}