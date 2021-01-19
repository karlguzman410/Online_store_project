import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <h1><Link to="/">Online Store</Link></h1>
            <Link to="/cart"><i className="ri-shopping-cart-line ri-fw ri-2x" /></Link>
        </header>
    )
}

export default Header
