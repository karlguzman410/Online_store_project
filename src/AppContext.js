import React, { useState, useEffect } from 'react'

const AppContext = React.createContext()

function ContextProvider({ children }) {

    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])


    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    function toggleFavorite(id) {
        let updatedPhotos = photos.map(photo => {
            if (photo.id === id) {
                console.log(id)
                console.log(`Status : ${!photo.isFavorite}`)
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }

            }
            return photo
        })

        setPhotos(updatedPhotos)
    }

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }


    console.log(`Cart: ${cartItems}`)

    useEffect(() => {
        //native built in fetch API
        fetch(url)
            //returns a promise, take the response and parse it as JSON
            .then(res => res.json())
            //using that data, set photos and pass in that data
            .then(data => setPhotos(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <AppContext.Provider value={{ photos, toggleFavorite, addToCart, cartItems, removeFromCart }}>
            {children}
        </AppContext.Provider>
    )
}

export { ContextProvider, AppContext }