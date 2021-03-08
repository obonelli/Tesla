import React from 'react'
import Button from './Button';
import './styles/item.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Item({ tittle, desc, descLink, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnTxt, rightBtnLink, twoButtons, first }) {
    return (
        <div className="item" style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
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
                </div>
            </div>

        </div>
    )
}

export default Item
