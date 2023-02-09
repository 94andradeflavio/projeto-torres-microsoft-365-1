import React, { useState } from 'react';
import Scroll, { Link, Events } from 'react-scroll';

import './styles.css';

const Navbar = () => {
    const [burgerClass, setBurgerClass] = useState('burger-bar unclicked')
    const [menuClass, setMenuClass] = useState('menu hidden')
    const [menuClicked, setMenuClicked] = useState(false)

    const links = [
        {
            name: 'Início',
            to: 'start',
            functions: () => updateMenu()
        },
        {
            name: 'Mercado',
            to: 'mercado',
            functions: () => updateMenu()
        },
        {
            name: 'Microsoft 365',
            to: 'microsoft-365',
            functions: () => updateMenu()
        },
        {
            name: 'Solução Microsoft 365',
            to: 'solucao-microsoft',
            functions: () => updateMenu()
        },
        {
            name: 'Case Grupo Sossai',
            to: 'fim',
            functions: () => updateMenu()
        },
    ]

    const updateMenu = () => {
        if(!menuClicked) {
            setBurgerClass('burger-bar clicked')
            setMenuClass('menu visible')
        } else {
            setBurgerClass('burger-bar unclicked')
            setMenuClass('menu hidden')
        }
        setMenuClicked(!menuClicked)
        scrollMore()
    }

    const scrollMore = () => {
        Events.scrollEvent.register('end', () => {
            const scroll = Scroll.animateScroll
            scroll.scrollMore(1)
            Events.scrollEvent.remove('end')
        })
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
                    { links.map(link => {
                        return (
                            <li key={link.name}>
                                <Link 
                                    onClick={link.functions}
                                    activeClass="active" 
                                    to={ link.to } spy={true} 
                                    isDynamic={true} 
                                    smooth={true} 
                                    offset={0} 
                                    duration={500}>
                                    { link.name }
                                </Link>
                            </li>
                        )
                    }) }
                </ul>
            </div>
        </div>
    )
}

export default Navbar