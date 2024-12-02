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
}

window.cs = productService

async function query(filterBy = {}) {
    var products = await storageService.query(STORAGE_KEY)

    // if (filterBy.message) {
    //     const regExp = new RegExp(filterBy.message, 'i')
    //     Products = Products.filter(Product => regExp.test(Product.message))
    // }
    // if (filterBy.email) {
    //     Products = Products.filter(Product => Product.message === filterBy.email)
    // }
    return products
}


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

function getEmptyProduct() {
    return {
        email: '',
        message: '',
    }
}

function _createProducts() {
    var products = loadFromStorage(STORAGE_KEY)
    if (!products || products.length === 0) {
        products = [
            {
                id: 1,
                title: 'tablet',
                price: 900,
                img: 'tablet.jpg',
                inCart:'yes',
            },
            {
                id: 2,
                title: 'lamp',
                price: 45,
                img:'lamp.jpg',
                inCart:'yes',
            },
            {
                id: 3,
                title: 'box-pens',
                price: 12,
                img:'box-pens.jpg',
                inCart:'yes',
            },
            {
                id: 4,
                title: 'flowerpot',
                price: 50,
                img: 'flowerpot.jpg',
                inCart:'yes',
            },
            {
                id: 5,
                title: 'diary',
                price: 23,
                img: 'diary.jpg',
                inCart:'yes',
            },
            {
                id: 6,
                title: 'calculator',
                price: 18,
                img: 'calculator.jpg',
                inCart:'yes',
            },
            {
                id: 7,
                title: 'letter',
                price: 5,
                img:'letter.jpg',
                inCart:'yes',
            },
            {
                id: 8,
                title: 'pens',
                price: 12,
                img:'pens.jpg',
                inCart:'yes',
            },
            {
                id: 9,
                title: 'notebook',
                price: 17,
                img:'notebook.jpg',
                inCart:'yes',
            },
        ]
        saveToStorage(STORAGE_KEY, products)
    }
    return products
}
