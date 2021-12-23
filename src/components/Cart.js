import { useState } from 'react'
import cart_logo from '../images/icon-cart.svg'
import thumbnail1 from "../images/image-product-1-thumbnail.jpg"
import delete_icon from '../images/icon-delete.svg'
import '../styles/Cart.scss'

function Cart() {
    const [toggle, setToggle] = useState(true)
    const [display, setDisplay] = useState('none')

    function showCart() {
        setToggle(!toggle)
        if(toggle === true) {
            setDisplay('block')
        }else{
            setDisplay('none')
        }
    }

    function handleDelete() {
        const cart = document.querySelector('.cart')
        const noti = document.querySelector('.notification span')
        cart.classList.remove('not-empty')
        noti.style.display = 'none'
    }
    return (
        <div className="cart-container">
            <div className="notification"><span>3</span></div>
            <img src={cart_logo} alt="cart" onClick={showCart} className="cart-logo"/>
            <div className="cart" style={{display: display}} >
                <p className="cart-name">Cart</p>
                <div className="cart-info">
                    <div className="product-info">
                        <img src={thumbnail1} alt="product" className="cart-product-img"/>
                        <div className="name-price">
                            <p>Fall Limited Edition Sneakers</p>
                            <span className="price-calculation">$125.00 x 3</span>
                            <span className="result-calculation">$375.00</span>
                        </div>
                        <img src={delete_icon} alt="delete" className="delete-icon" onClick={handleDelete}/>
                    </div>
                    <button className="check-out">Checkout</button>
                </div>
                <p className="cart-empty">Your cart is empty.</p>
            </div>
        </div>
    )
}

export default Cart