import React, { useState, useContext } from 'react'
import { AppContext } from '../AppContext.js'
import PropTypes from 'prop-types'


function Image({ className, img }) {

    const [hovered, setHovered] = useState(false)
    const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(AppContext)



    function hoverOver() {
        setHovered(true)
    }

    function hoverOut() {
        setHovered(false)
    }

    function heartIcon() {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    function cartIcon() {
        const inCart = cartItems.some(item => item.id === img.id)
        if (inCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }


    return (
        <div
            className={`${className} image-container`}
            onMouseEnter={hoverOver}
            onMouseLeave={hoverOut}>

            <img
                src={img.url}
                className="image-grid"
                alt="something here" />
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
