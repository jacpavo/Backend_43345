class ProductManager{
    constructor(){
        this.products = [];
    }

    getProducts(){
        return this.products;
    }

    agregarProduct(title, description, precio, thumbnail, stock){
        if(
            title == null ||
            description == null ||
            precio == null ||
            thumbnail == null ||
            stock == null
        ) {
            console.log("debe llenar todos los campos");
            return;
        }

        const product = {
            title,
            description,
            precio,
            thumbnail,
            stock,
            //code:this.products.lenght +1,
        };
        if (this.products.length === 0) {
            product.code = 1;
        } else {
            product.code = this.products[this.products.length - 1].code + 1;
        }

        this.products.push(product);
        console.log('se almaceno un producto');
    }

    getProductByCode(code){
        const product = this.products.find((product)=>{
            return product.code == code;
        });
        return product;
    }
}

const productManager = new ProductManager()

    productManager.agregarProduct(
        "Renault",
        "Duster 1.3 Turbo",
        27000,
        "https://1.bp.blogspot.com/-n1EOq5rlG90/YHRNfBLyIAI/AAAAAAAAAPA/NUz2sUajdeUOz69o5ZNRhmy70K_URx2HgCLcBGAsYHQ/s681/Renault%2BDuster%2B2021%2BEcuador%2Bfayalsautos.png",
        20,
    )


    productManager.agregarProduct(
        "Ford",
        "Ragner 3.2 XLT",
        56000,
        "https://upload.wikimedia.org/wikipedia/commons/6/61/2018_Ford_Ranger_%28PX%29_XLT_4WD_4-door_utility_%282018-10-22%29_01.jpg",
        6,
    )


console.log(productManager.getProducts())