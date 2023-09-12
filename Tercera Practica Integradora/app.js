import express from 'express';
import config from './src/config/config.js';
import usersRouter from './src/routes/users.router.js';
import productsRouter from './src/routes/products.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter)

const PORT = config.PORT; 

const server = app.listen(PORT, () =>  console.log(`Server running on port: ${server.address().port}`))