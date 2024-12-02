export const SET_PRODUCTS = 'SET_PRODUCTS'
export const SET_PRODUCT = 'SET_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const SET_CART = 'SET_CART'

const initialState = {
    products: [],
    product: null,
    cart:[],
}

export function productReducer(state = initialState, action) {
    var newState = state
    var products

    switch (action.type) {
        case SET_PRODUCTS:
            newState = { ...state, products: action.products }
            break
        case SET_PRODUCT:
            newState = { ...state, product: action.product }
            break
        case REMOVE_PRODUCT:
            const lastRemovedBook = state.products.find(product => product._id === action.productId)
            products = state.products.filter(product => product._id !== action.productId)
            newState = { ...state, products, lastRemovedBook }
            break
        case ADD_PRODUCT:
            newState = { ...state, products: [...state.products, action.product] }
            break
            case SET_CART:
                products = state.products.map(product => action.product.inCart == 'yes'),
                newState = { ...state, products}

                break
        default:
    }
    return newState
}