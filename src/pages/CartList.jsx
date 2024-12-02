import { useSelector } from 'react-redux'
import { loadCart } from '../store/actions/product.action.js'

import { CartPreview } from '../cmps/CartPreview.jsx'
import { useEffect, useState } from 'react';


export function CartList() {

    const [filterBy, setFilterBy] = useState({ inCart: 'yes' });
    const products = useSelector(storeState => storeState.productModule.products)
    // const currentProduct = Products.length > 0 ? Products[Products.length - 1] : null;

    useEffect(() => {
        loadCart(filterBy)
    }, [filterBy])

    return (
        <section className='cart'>
            <h1 >MY CART</h1>
            <ul className="cart-list">
                {products.map(product => (
                    <li className="cart-preview" key={product.id}>
                        <CartPreview product={product} />
                    </li>
                )
                )}
            </ul>
        </section>
    )
}