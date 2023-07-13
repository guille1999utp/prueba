export const addCartAction = (state, action) => {

    const product = action.payload;

    let currentCart = Array.from(state.cart);

    let existingProduct = currentCart.findIndex(item => (item.id === product.id));

    if (existingProduct !== -1) {

        let productExist = Object.assign({}, currentCart[existingProduct]);
        const newQuantity = productExist.quantity + 1;

        if (newQuantity <= Object.assign({}, currentCart[existingProduct]).maxQuantity) {
            productExist.quantity = newQuantity;
        }

        currentCart[existingProduct] = productExist;

    } else {

        currentCart.push({
            id: product.id,
            quantity: 1,
            maxQuantity: product.quantity,
            img:product.photo,
            name:product.name
        });
    }

    state.cart = currentCart;

    localStorage.setItem('shoppingCart', JSON.stringify(currentCart));

}

export const removeCartAction = (state, action) => {

    const id = action.payload;

    let currentCart = Array.from(state.cart);

    let existingProduct = currentCart.findIndex(item => (item.id === id));

    if (existingProduct !== -1) {

        let productExist = Object.assign({}, currentCart[existingProduct]);
        const newQuantity = productExist.quantity - 1;

        if (newQuantity > 0) {
            productExist.quantity = newQuantity;
            currentCart[existingProduct] = productExist;
        }else{
            currentCart = currentCart.filter((_, index) => index !== existingProduct);
        }


    } 

    state.cart = currentCart;

    localStorage.setItem('shoppingCart', JSON.stringify(currentCart));

}

export const emptyCartAction = (state, _) => {
    
    localStorage.setItem('shoppingCart', JSON.stringify([]));
    state.cart = [];

}