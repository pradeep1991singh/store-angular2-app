import { Component }            from "@angular/core";

import { ProductList }          from "./product/product-list.component";
import { ProductDetails }       from "./product/product-details.component";

@Component({
    selector:'my-app',
    template: `<h3 class="text-center"> – Welcome to Angular2 Store application – </h3>

               <hr />

               <div class="container-fluid">
                    <nav class="text-center">
                        <a routerLink="/" routerLinkActive="active">
                            <span class="glyphicon glyphicon-home" aria-hidden="true"></span> Home 
                        </a>
                    </nav>              

                    <hr />                    
                    
                    <router-outlet></router-outlet>
               </div>`
})
export class AppComponent { }


