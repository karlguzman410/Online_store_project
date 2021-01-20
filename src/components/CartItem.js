import React, { useContext, useState } from 'react'
import { AppContext } from '../AppContext'
import PropTypes from 'prop-types'

function CartItem({ item }) {

    const { removeFromCart } = useContext(AppContext)
    const [binHover, setBinHover] = useState(false)

    const binDisplay = (binHover) ? "ri-delete-bin-fill" : "ri-delete-bin-line"


    return (
        <div className="cart-item">
            <i
                className={binDisplay}
                onClick={() => removeFromCart(item.id)}
                onMouseEnter={() => setBinHover(true)}
                onMouseLeave={() => setBinHover(false)}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem
