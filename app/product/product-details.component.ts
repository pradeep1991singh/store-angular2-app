import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from './products.service';
import { Review }    from './review.model';

declare const module;

@Component({
  selector: 'product-details',
  moduleId: module.id,
  templateUrl: 'product-details.component.html',
  styles: [`
    .ng-valid[required], .ng-valid.required  {
      border-left: 5px solid #42A948;
    }
    .ng-invalid:not(form)  {
      border-left: 5px solid #a94442;
    }`
  ]
})
export class ProductDetails {

  product = {};

  id: number;
  private sub: any;  

  static $inject = ['$routeParams'];  

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.product = this.productsService.products[this.id - 1];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  } 

  tab = 1;  

  addToCart(product: Object) {
    console.log(product);
  }

  selectTab(setTab: number) {
    this.tab = setTab;
  }

  isSelected(checkTab: number) {
    return this.tab == checkTab;
  }

  starRatings = [
    {name: '1 Star', value: 1},
    {name: '2 Star', value: 2},
    {name: '3 Star', value: 3},
    {name: '4 Star', value: 4},
    {name: '5 Star', value: 5}
  ];

  review = new Review(4, null, null);  

  addReview() {
    console.log(this.review);
  }

}