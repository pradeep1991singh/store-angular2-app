import { Route }            from "@angular/router";
import { ProductList }      from "./product/product-list.component";
import { ProductDetails }   from "./product/product-details.component";

const indexRoute:Route = {
    path: "",
    component: ProductList
};

const fallbackRoute:Route = {
    path: '**',
    component: ProductList
};

export const routeConfig = [
    {
        path: 'product-list',
        component: ProductList
    },
    {
        path: 'product/:id',
        component: ProductDetails
    },
    fallbackRoute,
    indexRoute
];