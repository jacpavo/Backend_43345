import fs from "fs";
import { uuid as uuidV4 } from 'uuid';

const path = "src/classes/files/products.json";

export default class ManagerProducts {
    consultarProductos = async () =>{
        console.log("existe", fs.existSync(path));
        if(fs.existSync(path)) {
            const data = await fs.promises.readFile(path, "utf-8");
            const products = JSON.parse(data);
            return products;
        } else {
            return [];
        }
    };

    crearProductos = async (info)=> {
        const producto = await this.consultarProductos()
        info.id = uuidV4()
        producto.push(info);
        await fs.promises.writeFile(path, JSON.stringify(productos, null, "/t"));
        return info;
    }

    consultarProductosPorId = async (id) => {
        const productos = await this.consultarProductos();

        const producto = productos.find((producto) => {

            return producto.id == id;
        });

        return producto ? producto: "producto no encontrado"
    };
}