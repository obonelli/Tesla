import React from 'react'
import './styles/footer.css';
import { useMediaQuery } from 'react-responsive'

function Footer() {
    const isMobile = useMediaQuery({ minWidth: 1, maxWidth: 640 })
    const isTabletOrMobile = useMediaQuery({ minWidth: 641, maxWidth: 1199 })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1200px)' })
    return (
        <div className="footer">
            {isBigScreen &&
                <div className="footer__center">
                    <p>Tesla @2021</p>
                    <p>Privacy and legal</p>
                    <p>Contact</p>
                    <p>Job Board</p>
                    <p>Get the newsletter</p>
                    <p>News</p>
                    <p>Locations</p>
                </div>
            }
            {isTabletOrMobile &&
                <div className="footer__center">
                    <p>Tesla @2021</p>
                    <p>Privacy and legal</p>
                    <p>Contact</p>
                    <p>News</p>
                </div>
            }
            {isMobile &&
                <div className="footer__center">
                    <p>Tesla @2021</p>
                    <p>Privacy and legal</p>
                </div>
            }
        </div>

    )
}

export default Footer
