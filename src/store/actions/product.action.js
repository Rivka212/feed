import { productService } from '../../services/product/product.service.js'
import { ADD_PRODUCT, REMOVE_PRODUCT, SET_PRODUCT, SET_PRODUCTS } from '../reducers/product.reducer.js'
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

export async function removeProduct(productId) {
    try {
        const product = await productService.remove(productId)
        store.dispatch(getCmdRemoveProduct(product))
    } catch (err) {
        console.log('Cannot remove product', err)
        throw err
    }
}

export async function addProduct(product) {    
    try {
        const savedProduct = await productService.save(product)
        store.dispatch(getCmdAddProduct(savedProduct))
        return savedProduct
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
        type: ADD_PRODUCT,
        product
    }
}