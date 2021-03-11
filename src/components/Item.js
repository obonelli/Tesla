import React from 'react'
import Button from './Button';
import './styles/item.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Footer from './Footer';
import { useMediaQuery } from 'react-responsive'

function Item({ tittle, desc, descLink, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnTxt, rightBtnLink, twoButtons, first, last, penultimate }) {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1200px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

    return (

        <div className="item" style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            {isTabletOrMobile &&
                <div className="item__container_small">
                    <div className="item__text_small">
                        <p>{tittle}</p>
                        <div className="item__textDesc">
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className="item__lowerThird">
                        <div className="item__buttons">
                            <Button imp='primary' text={leftBtnTxt} link={leftBtnLink} />
                            {twoButtons && (
                                <Button imp='secondary' text={rightBtnTxt} link={rightBtnLink} />
                            )}
                        </div>
                        {first && (
                            <div className="item__expand">
                                <ExpandMoreIcon />
                            </div>
                        )}
                        {last && (
                            <div>
                                <Footer />
                            </div>
                        )}
                    </div>
                </div>
            }
            {isBigScreen &&
                <div className="item__container">
                    <div className="item__text">
                        <p>{tittle}</p>
                        <div className="item__textDesc">
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className="item__lowerThird">
                        <div className="item__buttons">
                            <Button imp='primary' text={leftBtnTxt} link={leftBtnLink} />
                            {twoButtons && (
                                <Button imp='secondary' text={rightBtnTxt} link={rightBtnLink} />
                            )}
                        </div>
                        {first && (
                            <div className="item__expand">
                                <ExpandMoreIcon />
                            </div>
                        )}
                        {last && (
                            <div>
                                <Footer />
                            </div>
                        )}
                    </div>
                </div>
            }
        </div>
    )
}

export default Item
