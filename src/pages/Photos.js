import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import Image from '../components/Image'
import { getClass } from '../utils/photoIndex'

function Photos() {

    const { photos } = useContext(AppContext)

    console.log(photos)

    const images = photos.map((img, i) => {
        return (
            <Image key={img.id} img={img} className={getClass(i)} />
        )
    })
    return (
        <>
            <div>
                <h1>Welcome to the store</h1>
            </div>
            <main className="photos">

                {images}
            </main>
        </>

    )
}

export default Photos
