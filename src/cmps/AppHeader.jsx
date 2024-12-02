import { NavLink } from "react-router-dom";

export function AppHeader() {
    return (
        <header>
            <section className="header-container">
                <section className="app-header">
                    <h1 >SHOPPING CART</h1>
                    <nav className="app-nav">
                        <NavLink to="/">home</NavLink>
                        <NavLink to="/about">about us</NavLink>
                        <NavLink to="/contact">contact us</NavLink>
                        <NavLink to="/cart"><img className="cart" src={`../../icons/cart.png`} alt="cart"/></NavLink>
                    </nav>
                </section>
                <img src={`../../imgs/office.jpg`} alt="shopping-image" />
            </section>
        </header>
    )
}