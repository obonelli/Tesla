import React from 'react'
import './styles/header.css';
import TeslaLogo from '../assets/teslaLogoSmall.svg'
import DehazeIcon from '@material-ui/icons/Dehaze';

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={TeslaLogo} alt="Tesla Logo" />
            </div>

            <div className="header__center">
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
                <p>Solar Roof</p>
                <p>Solar Panel</p>
            </div>

            <div className="header__right">
                <p>Tesla Account</p>
                <i><DehazeIcon /></i>
            </div>

        </div>
    )
}

export default Header
