import express from 'express';
import routerProducts from './routes/product.router.js';
import routerCart from './routes/cart.router.js';
import viewsRouter from './routes/views.router.js';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import ProductManager from './classes/productManager.class.js';
import { Server } from "socket.io";

const app = express();
const productManager = new ProductManager();

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/products', routerProducts)
app.use('/cart', routerCart)

const products = productManager.getProducts();
app.get('/', (req, res) => {
    res.render('index', {products})
})


const expressServer = app.listen(8080, () => console.log("Listening"));
const socketServer = new Server(expressServer);

socketServer.on("connection", (socket) => {
  console.log("You are connected ");
  socket.emit('products', products);
 
});

app.use(function (req, res, next) {
    req.socketServer = socketServer,
    next();
})

app.use('/viewsRouter/', routerProducts)