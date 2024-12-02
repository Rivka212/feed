
export function ProductPreview({ product }) {   

    return (
        <article>
            <img src={`../../imgs/${product.img}`} alt={product.title} />
            {/* <div> */}
                <h4>{product.title}</h4>
                <h4>price: {product.price}</h4>
            {/* </div> */}
        </article>
    )
}
