import React from "react";
import './styles.css';

import logoImg from '../../../assets/images/logo/logo.png'

const Logo = () => {
    return (
        <div className="logo-div">
            <img src={logoImg} alt="logo" />
        </div>
    )
}

export default Logo