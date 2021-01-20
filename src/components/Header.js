import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import { Link } from 'react-router-dom'

function Header() {

    const { cartItems } = useContext(AppContext)

    function displayCart() {
        if (cartItems.length > 0) {
            return (
                <Link to="/cart"><i className="ri-shopping-cart-fill ri-fw ri-2x" />
                    <strong>{cartItems.length}</strong>
                </Link>
            )

        } else {
            return (
                <Link to="/cart"><i className="ri-shopping-cart-line ri-fw ri-2x" />
                    <strong> 0 </strong>
                </Link>
            )
        }
    }
    return (
        <header>
            <h1><Link to="/">Online Store</Link></h1>
            {displayCart()}

        </header>
    )
}

export default Header
