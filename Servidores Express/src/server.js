import express from 'express'
import ProductManager from './clases/ProductManager.js'

const app = express()

app.get ('/productos', async (req, res)=>{
    console.log(req.res.limit)
    const productos = await productoManager.consultarProductosPorId(req.params.id)
    res.send(productos)
})

app.get('/productos/:id', async (req, res)=>{
    const producto = await ProductoManager.consultarProductosPorId(req.params.id)
    res.send(producto)
})

app.listen(8080, () =>{console.log('servidor levantado')})