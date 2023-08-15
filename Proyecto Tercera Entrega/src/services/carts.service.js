import CartManager from "../daos/mongodb/classes/cartManager.class.js";

const cartManager = new CartManager();

export const getCartService = async (user, id, bole) => {
    const cart = await cartManager.getCartById(id,bole);
    if (!cart) {
        throw new Error ("Cart not found");
    }
    const carrito = cart.products;
    let carritofinal = [];
    function listaCarrito (){
        for (let index = 0; index < carrito.length; index++) {
            let productocarrito = {}
            productocarrito = {product: carrito[index].product, amount:carrito[index].amount}
            carritofinal.push(productocarrito)
        }
    }
    
    listaCarrito();
    const carritoandUser ={
        carritofinal,
        user
    }
    console.log(carrito)
    return carritoandUser;
}

export const deleteFromCartService = async (cartId, productId) => {
    const cart = await cartManager.deleteFromCart(cartId, productId);
    if (!cart) {
        throw new Error ("Cart not found");
    }
}

export const getCartsService = async () => {
    const carts = cartManager.getCarts();
    return carts;
}

export const addToCartService = async (cartId, productId) => {
    cartManager.addToCart(cartId, productId);
}
export const clearCartService = async (cartId) => {
    await cartManager.clearCart(cartId);
}
export const updateCartService = async (cartId, products) => {
    await cartManager.updateCart(cartId, products);
}
export const updateProductQuantityService = async (cartId, productId, products) => {
    await cartManager.updateProductQuantity(cartId, productId, products);
    
}

export const createCartService = async () => {
    cartManager.createCart();
}

export const purchaseService = async (id) =>{
    const cart = await cartManager.getCartById(id);
    const carrito = cart.products;
    let counter = 0
    let price = 0
    for (const item of carrito){
        if (substractToProductStock (item.product._id, item_amount)){
            carrito.splice(counter,1)
            price = price + item.product.price * item_amount
        }
        counter++
    }


}