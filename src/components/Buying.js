import { useState } from 'react';

import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
import cart_logo from "../images/icon-cart.svg";
import "../styles/Buying.scss";


function Buying() {
    const [quantity, setQuantity] = useState(0)
    const priceCalculation = document.querySelector('.price-calculation')
    const resultCalculation = document.querySelector('.result-calculation')
    const cart = document.querySelector('.cart')
    const noti = document.querySelector('.notification span')
    function handleAddCart() {
        if(quantity!==0){
            noti.style.display='inline-block'
            noti.innerHTML=quantity
            priceCalculation.innerHTML = `$125.00 x ${quantity}`
            resultCalculation.innerHTML = `$${(125.00 * quantity).toFixed(2)}`
            cart.classList.add('not-empty')
        }
    }
    return(
        <div className="buying">
            <div className="quantity">
                <img src={minus} alt="minus" onClick={() => quantity===0? setQuantity(0) : setQuantity(quantity - 1)} />
                <span>{quantity}</span>
                <img src={plus} alt="plus" onClick={() => setQuantity(quantity + 1)}/>
            </div>
            <button className="add-btn" onClick={handleAddCart}><img src={cart_logo} alt="cart"/>Add to cart</button>
        </div>
    )
}

export default Buying