import {NgModule, Component}        from "@angular/core";
import {BrowserModule}              from "@angular/platform-browser";
import { FormsModule, 
        FormControl, 
        ReactiveFormsModule }       from '@angular/forms';
import { HttpModule }               from '@angular/http';
import { RouterModule }             from "@angular/router";


import { AppComponent }             from './app.component';
import { routeConfig }              from "./app-routing.module";
import { ProductList }              from "./product/product-list.component";
import { ProductDetails }           from "./product/product-details.component";
import { ProductsService }          from './product/products.service';

 
@NgModule({
    declarations: [AppComponent, ProductList, ProductDetails],
    imports: [
      BrowserModule, 
      FormsModule, 
      ReactiveFormsModule, 
      HttpModule,
      RouterModule.forRoot(routeConfig),
    ],
    bootstrap: [AppComponent],
    providers: [ProductsService]
})
export class AppModule { }

