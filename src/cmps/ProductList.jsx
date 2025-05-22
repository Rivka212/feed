import { ProductPreview } from './ProductPreview.jsx'

export function ProductList({ products, onAddProductToCart }) {

    return (
        <ul className="product-list">
            {products.map(product => (
                <li className="product-preview" key={product._id}>
                    <ProductPreview product={product} onAddProductToCart={onAddProductToCart}/>
                </li>
            )
            )}
        </ul>
    )
}