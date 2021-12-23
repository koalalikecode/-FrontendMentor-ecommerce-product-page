import logo from '../images/logo.svg'
import ava from '../images/image-avatar.png'
import '../styles/Navbar.scss'

import Cart from './Cart.js'

function Navbar() {
    return (
        <div className="navbar">
            <div className = "logo" onClick={() => console.log(1)}>
                <img src={logo} alt = 'Logo'/>

            </div>
            <ul className='menu'>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <Cart />
            
            <img src={ava} className='avatar' alt = 'Avatar'/>
        </div>
    )
}

export default Navbar