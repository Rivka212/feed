import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { ProductList } from '../cmps/ProductList.jsx'
import { ProductFilter } from '../cmps/ProductFilter.jsx'
import { loadProducts, removeProduct, addProduct } from '../store/actions/product.action.js'
import { productService } from '../services/product/product.service.js'


export function ProductIndex() {
    const [filterBy, setFilterBy] = useState({ message: '', email: '' });

    const products = useSelector(storeState => storeState.productModule.products)
    // const currentProduct = Products.length > 0 ? Products[Products.length - 1] : null;

    useEffect(() => {
        loadProducts(filterBy)
    }, [filterBy])
    

    async function onRemoveProduct(productId) {
        try {
            await removeProduct(productId)
        } catch (err) {
            console.log('Cannot remove product')
        }
    }

    async function onAddProduct(product) {
        try {
            const savedProduct = await addProduct(product)
            console.log(`Product added (id: ${savedProduct._id})`)
        } catch (err) {
            console.log('Cannot add product')
        }
    }


    function onSetFilterBy(newFilter) {
        console.log(newFilter);

        setFilterBy({ ...newFilter })
    }

    return (
        <section className="main-container">
            <div>
                <ProductFilter filterBy={filterBy} onFilterBy={onSetFilterBy} />
                <ProductList products={products} onRemoveProduct={onRemoveProduct} />
            </div>
        </section>
    )



}