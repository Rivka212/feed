
export function ProductPreview({ product, onAddProductToCart }) {   

    return (
        <article>
            <img src={`../../imgs/${product.img}`} alt={product.title} />
            {/* <div> */}
                <h4>{product.title}</h4>
                <h4>price: {product.price}$</h4>
                <button className="btn-add" onClick={()=> onAddProductToCart(product)}>Add To Cart </button>
            {/* </div> */}
        </article>
    )
}
