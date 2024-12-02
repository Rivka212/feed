import { ProductPreview } from './ProductPreview.jsx'

export function ProductList({ products, onRemoveProduct }) {

    return (
        <ul className="product-list">
            {products.map(product => (
                <li className="product-preview" key={product.id}>
                    <ProductPreview product={product} />
                </li>
            )
            )}
        </ul>
    )
}