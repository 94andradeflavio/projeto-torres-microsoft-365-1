import React from "react";
import './styles.css';

import logoImg from '../../../assets/images/bloco-1/logo.png'
import retrancaImg from '../../../assets/images/bloco-1/retranca.png'

const Logo = () => {
    return (
        <div className="logo-div">
            <img src={retrancaImg} alt="" className="retranca" />
            <img src={logoImg} alt="logo" />
        </div>
    )
}

export default Logo