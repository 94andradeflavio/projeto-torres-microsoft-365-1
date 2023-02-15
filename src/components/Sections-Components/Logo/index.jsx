import React from "react";
import './styles.css';

import logoImg from '../../../assets/images/logo/logo.png'
import { fixImage } from "../../../helpers/fixImage";

const Logo = () => {

    return (
        <div className="logo">
            <div className="logo-wrapper">
            </div>
            <img src={fixImage(logoImg)} alt="logo" />
        </div>
    )
}

export default Logo