import React from 'react'
import './styles/header.css';
import TeslaLogo from '../assets/teslaLogoSmall.svg'
import DehazeIcon from '@material-ui/icons/Dehaze';
import { useMediaQuery } from 'react-responsive'

function Header() {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1200px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
    // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return (
        <div className="header">
            <div className="header__logo">
                <img src={TeslaLogo} alt="Tesla Logo" />
            </div>
            {isTabletOrMobile &&
                <div className="header__center">
                </div>
            }


            {isBigScreen &&
                <div className="header__center">
                    <p>Model S</p>
                    <p>Model 3</p>
                    <p>Model X</p>
                    <p>Model Y</p>
                    <p>Solar Roof</p>
                    <p>Solar Panel</p>
                </div>

            }

            {isBigScreen &&
                <div className="header__right">
                    <p>Tesla Account</p>
                    <i><DehazeIcon /></i>
                </div>
            }

            {isTabletOrMobile &&
                <div className="header__right">
                    <i><DehazeIcon /></i>
                </div>
            }

        </div>
    )
}


export default Header
