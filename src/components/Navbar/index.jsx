import React, { useState } from 'react';
import './styles.css';

const Navbar = () => {
    const [burgerClass, setBurgerClass] = useState('burger-bar unclicked')
    const [menuClass, setMenuClass] = useState('menu hidden')
    const [menuClicked, setMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!menuClicked) {
            setBurgerClass('burger-bar clicked')
            setMenuClass('menu visible')
        } else {
            setBurgerClass('burger-bar unclicked')
            setMenuClass('menu hidden')
        }
        setMenuClicked(!menuClicked)
    }

    return (
        <div className='navigation'>
            <nav onClick={updateMenu}>
                <button className='burger-menu'>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                </button>
            </nav>
            <div className={menuClass}>
                <ul>
                    <li><span>Início</span></li>
                    <li><span>Item 2</span></li>
                    <li><span>Item 3</span></li>
                    <li><span>Item 4</span></li>
                    <li><span>Item 5</span></li>
                    <li><span>Item 6</span></li>
                    <li><span>Item 7</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar