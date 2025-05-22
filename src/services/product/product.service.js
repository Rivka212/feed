import { storageService } from '../async-storage.service.js'
import { makeId, saveToStorage, loadFromStorage } from '../util.service.js'

const STORAGE_KEY = 'productDB'
let products = _createProducts()

export const productService = {
    query,
    getById,
    remove,
    save,
    getEmptyProduct,
    addToCart,
}

window.cs = productService

async function query(filterBy = {}) {
    var products = await storageService.query(STORAGE_KEY)

    // if (filterBy.message) {
    //     const regExp = new RegExp(filterBy.message, 'i')
    //     Products = Products.filter(Product => regExp.test(Product.message))
    // }
    if (filterBy.quantity) {
        products = products.filter(product => product.quantity >0)
    }
    return products
}

// loadCart


function getById(productId) {
    return storageService.get(STORAGE_KEY, productId)
}

async function remove(productId) {
    await storageService.remove(STORAGE_KEY, productId)
}


async function save(product) {
    product = await storageService.post(STORAGE_KEY, product)
    return product
}

async function addToCart(product) {
    console.log(product);
    console.log('Sending product to addToCart:', product)

    product.quantity = (product.quantity || 0) + 1
    product = await storageService.put(STORAGE_KEY, product)
    // product = storageService.put(STORAGE_KEY, product)
    return product

}

function getEmptyProduct() {
    return {
        title: '',
        price: '',
    }
}

function _createProducts() {
    var products = loadFromStorage(STORAGE_KEY)
    if (!products || products.length === 0) {
        products = [
            {
                _id: 1,
                title: 'tablet',
                price: 900,
                img: 'tablet.jpg',
                quantity: 1,
            },
            {
                _id: 2,
                title: 'lamp',
                price: 45,
                img: 'lamp.jpg',
                quantity: 1,
            },
            {
                _id: 3,
                title: 'box-pens',
                price: 12,
                img: 'box-pens.jpg',
                quantity: 1,
            },
            {
                _id: 4,
                title: 'flowerpot',
                price: 50,
                img: 'flowerpot.jpg',
                quantity: 1,
            },
            {
                _id: 5,
                title: 'diary',
                price: 23,
                img: 'diary.jpg',
                quantity: 0,
            },
            {
                _id: 6,
                title: 'calculator',
                price: 18,
                img: 'calculator.jpg',
                quantity: 0,
            },
            {
                _id: 7,
                title: 'letter',
                price: 5,
                img: 'letter.jpg',
                quantity: 0,
            },
            {
                _id: 8,
                title: 'pens',
                price: 12,
                img: 'pens.jpg',
                quantity: 1,
            },
            {
                _id: 9,
                title: 'notebook',
                price: 17,
                img: 'notebook.jpg',
                quantity: 1,
            },
        ]
        saveToStorage(STORAGE_KEY, products)
    }
    return products
}
