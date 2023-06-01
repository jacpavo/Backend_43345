import fs from 'fs'

//const fs = require ('fs');
const path = 'src/clases/file/productos.json';

export default class ProductManager {
    consultarProductos = async (limit)=> {
        if(fs.existsSync(path)){
            const data = await fs.promises.readFile(path, 'utf-8');
            const products = JSON.parse(data);
            return products;
        } else {
            return [];
        }
    };

    crearProductos = async (info) => {
        const products = await this.consultarProductos();
        if (products.length === 0) {
            info.id = 1;
        } else {
            info.id = products[products.length-1].id + 1;
        }
        products.push(info)
        await fs.promises.writeFile(path, JSON.stringify(products,null, '\t'))
    };

    borrarProductos = async(id)=>{
        const productos = await this.consultarProductos();
        const productosFiltrados = productos.filter((producto)=>{
            return producto.id!== id;
        });
        await fs.promises.writeFile(path, JSON.stringify(productosFiltrados, null, '\t'));
    };

    consultarProductosPorId = async (id) =>{
        const productos = await this.consultarProductos();
        const productoBuscado = productos.find((producto)=>{
            return producto.id === id;
        });
        return productoBuscado;
    };
}
