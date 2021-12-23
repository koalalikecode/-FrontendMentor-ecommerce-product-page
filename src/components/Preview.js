import { useState } from 'react'

import image1 from "../images/image-product-1.jpg"
import image2 from "../images/image-product-2.jpg"
import image3 from "../images/image-product-3.jpg"
import image4 from "../images/image-product-4.jpg"
import thumbnail1 from "../images/image-product-1-thumbnail.jpg"
import thumbnail2 from "../images/image-product-2-thumbnail.jpg"
import thumbnail3 from "../images/image-product-3-thumbnail.jpg"
import thumbnail4 from "../images/image-product-4-thumbnail.jpg"
import close_icon from '../images/icon-close.svg'
import previous from '../images/icon-previous.svg'
import next from '../images/icon-next.svg'

import "../styles/Preview.scss"

function Preview() {
    const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4]
    const images = [image1, image2, image3, image4]
    const [activeImage, setActiveImage] = useState(0)

    return(
        <div className="preview">
            <div className="image-preview-container">
                <img src={close_icon} alt="Close" className="close-btn" onClick={() => document.querySelector('.preview').style.display = 'none'}/>
                <button className="previous-btn" onClick = {() => activeImage > 0 ? setActiveImage(activeImage - 1): setActiveImage(0)}><img src={previous} alt="Previous"/></button>
                <img src={images[activeImage]} className="product-image-preview" alt="Product"/>
                <button className="next-btn"  onClick = {() => activeImage < 3 ? setActiveImage(activeImage + 1): setActiveImage(3)}><img src={next} alt="Next"/></button>
            </div>
            <div className="product-thumbnail-preview">
                {thumbnails.map((thumbnail, index) => <img onClick={() => setActiveImage(index)} 
                className={index === activeImage ? "thumbnail-preview active" : "thumbnail-preview"} 
                src={thumbnail} alt="Product" key={index}/>)}
            </div>
        </div>
    )
}
export default Preview