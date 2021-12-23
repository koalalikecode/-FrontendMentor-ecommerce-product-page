import "../styles/Content.scss"
import Buying from "./Buying.js"

function Content() {
    return (
        <div className="content">
            <div className="intro">
                <p className="company">SNEAKER COMPANY</p>
                <h1 className="product-name">Fall Limited Edition Sneakers</h1>
                <p className="description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                <h2 className="price">$125.00</h2>
                <p className="past-price">$250.00</p>
            </div>
            <Buying />
        </div>
    )
}

export default Content