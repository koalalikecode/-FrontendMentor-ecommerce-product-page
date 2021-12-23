import { useState } from 'react'

import image1 from "../images/image-product-1.jpg"
import image2 from "../images/image-product-2.jpg"
import image3 from "../images/image-product-3.jpg"
import image4 from "../images/image-product-4.jpg"
import thumbnail1 from "../images/image-product-1-thumbnail.jpg"
import thumbnail2 from "../images/image-product-2-thumbnail.jpg"
import thumbnail3 from "../images/image-product-3-thumbnail.jpg"
import thumbnail4 from "../images/image-product-4-thumbnail.jpg"

import "../styles/Image.scss"

function Image() {
    const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4]
    const images = [image1, image2, image3, image4]
    const [activeImage, setActiveImage] = useState(0)
    return(
        <div className="image">
            <img src={images[activeImage]} className="product-image" alt="Product" onDoubleClick={() => document.querySelector('.preview').style.display = 'flex'}/>
            <div className="product-thumbnails">
                {thumbnails.map((thumbnail, index) => <img onClick={() => setActiveImage(index)} 
                className={index === activeImage ? "thumbnail active" : "thumbnail"} 
                src={thumbnail} alt="Product" key={index}/>)}
            </div>
        </div>
    )
}

export default Image