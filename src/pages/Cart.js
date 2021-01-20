import React, { useContext, useState, useEffect } from 'react'
import { AppContext, Context } from '../AppContext'
import { Redirect } from 'react-router-dom'
import CartItem from '../components/CartItem'

function Cart() {

    const PRICE = 5.99
    const { cartItems, emptyCart } = useContext(AppContext)
    const [total, setTotal] = useState(0)
    const [placeOrder, setPlaceOrder] = useState(false)
    const [orderPlaced, setOrderPlaced] = useState(false)

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const displayTotal = total.toLocaleString("en-US", { style: "currency", currency: "USD" })
    const placeOrderDisplay = (placeOrder ? "Ordering" : "Place Order")
    const displayOrderPlacedPage = (orderPlaced ? <Redirect to="/thankyou" /> : null)

    useEffect(() => {
        if (cartItems.length > 0) {
            setTotal(PRICE * cartItems.length)
        } else if (cartItems.length === 0) {
            setTotal(0)
        }
    }, [total, cartItems.length])

    function placeOrderHandler() {
        if (cartItems.length > 0) {
            setPlaceOrder(true)
            setTimeout(() => {
                console.log("Order placed")
                setPlaceOrder(false)
                setOrderPlaced(true)
                emptyCart()
            }, 3000)
        } else {
            alert("Cart is empty!")
        }

    }


    return (
        <main className="cart-page">
            <h1>My Cart</h1>
            {cartItemElements}
            <p className="total-cost">Total: {displayTotal}</p>
            <div className="order-button">
                <button onClick={placeOrderHandler}>{placeOrderDisplay}</button>
            </div>
            {displayOrderPlacedPage}
        </main>
    )
}

export default Cart
