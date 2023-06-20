import express from "express"
import handlebars from 'express-handlebars'

import __dirname from "../../WebSockets/src/utils.js";

import routerProducts from './products.router.js';
import routerCart from './routes/cart.router.js';
import routerViews from ''

import { Server } from "socket.io";
import ProductManager from '';

//initial configuration

const app = express();

app.use(express.json());
app.use(express.urlencode({extended: true}));

//static

app.use(express.static(__dirname + "/public"));

// handlebars configuration

app.engine("handlebars", handlebars.engine());
app.set("views", _dirname + "/views");
app.set("views engine", "handlebars");

//routers

app.use("/", routerViews);
    
app.use('/products/', routerProducts)
app.use('/carts/', routerCart)

app.listen(8080, ()=>{
    console.log('servidor levantado')
})