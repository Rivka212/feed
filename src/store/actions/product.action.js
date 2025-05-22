import { productService } from '../../services/product/product.service.js'
import { ADD_PRODUCT, REMOVE_PRODUCT, SET_CART, SET_PRODUCT, SET_PRODUCTS, UPDATE_PRODUCT } from '../reducers/product.reducer.js'
import { store } from '../store.js'

export async function loadProducts(filterBy = {}) {
    try {
        const products = await productService.query(filterBy)
        store.dispatch(getCmdSetProducts(products))
        // return product
    } catch (err) {
        console.log('Cannot load product', err)
        throw err
    }
}

export async function loadProduct() {
    try {
        const product = await productService.getById(productId)
        store.dispatch(getCmdSetProduct(product))
    } catch (err) {
        console.log('Cannot load product', err)
        throw err
    }
}

export async function loadCart(filterBy = { quantity }) {
    try {
        const products = await productService.query(filterBy)
        store.dispatch(getCmdSetCart(products))
        // return product
    } catch (err) {
        console.log('Cannot load cart', err)
        throw err
    }
}


export async function removeProduct(productId) {
    try {
        const product = await productService.remove(productId)
        store.dispatch(getCmdRemoveProduct(product))
    } catch (err) {
        console.log('Cannot remove product', err)
        throw err
    }
}

export async function addProductToCart(product) {
    console.log(product);
    console.log('Sending product to addToCart:', product)

    try {
        const updatedProduct = await productService.addToCart(product)
        store.dispatch(getCmdAddProduct(updatedProduct))
        store.dispatch({ type: SET_CART })
        return updatedProduct
    } catch (err) {
        console.log('Cannot add product', err)
        throw err
    }
}

// Command Creators:
function getCmdSetProducts(products) {
    return {
        type: SET_PRODUCTS,
        products
    }
}
function getCmdSetProduct(product) {
    return {
        type: SET_PRODUCT,
        product
    }
}
function getCmdRemoveProduct(productId) {
    return {
        type: REMOVE_PRODUCT,
        productId
    }
}
function getCmdAddProduct(product) {
    return {
        type: UPDATE_PRODUCT,
        product
    }
}

function getCmdSetCart(products) {
    return {
        type: SET_CART,
        products
    }
}
