declare const require;

var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
import {PRODUCTS} from "./app/product/products";

var app = express();

app.use(express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.text());

const products = PRODUCTS;

app.route('/products')
    .get((req, res) => {
        
        var filtered = products;
        
        if (req.query.search) {
            console.log(req.query.search);
            filtered = filtered.filter(
                lesson => lesson.description.indexOf(req.query.search) != - 1);
        }
        
        res.status(200).json(filtered);
    })
    .post((req, res) => {
        products.push(req.body);
        res.status(200).send();
    });

app.route('/products/:productId')
    .delete((req,res) => {
        const productId = req.params.productId;
        console.log("deleting lesson ", productId);
        const index = _.find(products,
            lesson => lesson.id === productId
        );
        products.splice(index, 1);
        res.status(200).send();
    });

app.route('/flakyproducts')
    .get((req, res) => {

        const num = Math.round(Math.random() * 10);

        if (num % 2 == 0) {
            res.status(200).json(products);
        }
        else {
            res.status(500).send();
        }

    });

app.route('/delayedproducts')
    .get((req, res) => {
        
        setTimeout(() => {

            var filtered = products;

            if (req.query.search) {
                console.log(req.query.search);
                filtered = filtered.filter(
                    lesson => lesson.description.indexOf(req.query.search) != - 1);
            }

            res.status(200).json(filtered);
            
        }, 1000);
        
    });

function redirectRouterLessonUnmatched(req,res) {
    res.sendFile("index.html", { root: './src/router-introduction' });
}

app.use(redirectRouterLessonUnmatched);

var server = app.listen(8080, function() {
    console.log("Server running at http://localhost:" + server.address().port);
});