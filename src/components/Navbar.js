import { useState } from 'react'

import logo from '../images/logo.svg'
import ava from '../images/image-avatar.png'
import menu_icon from '../images/icon-menu.svg'
import close from '../images/icon-close.svg'
import '../styles/Navbar.scss'

import Cart from './Cart.js'

function Navbar() {
    const [menu, setMenu] = useState(false)
    return (
        <div className="navbar">
            <div class='menu-btn'>
                <img src={menu_icon} alt='menu' onClick={() => setMenu(true)}/>
            </div>
            <div className = "logo" onClick={() => console.log(1)}>
                <img src={logo} alt = 'Logo'/>

            </div>
            <div className={menu ? 'menu-container menu-active' : 'menu-container'}>
                <ul className='menu'>
                    <img src={close} alt = 'Close' onClick={() => setMenu(false)}/>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

            <Cart />
            
            <img src={ava} className='avatar' alt = 'Avatar'/>
        </div>
    )
}

export default Navbar