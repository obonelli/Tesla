import React from 'react'
import './styles/button.css';

const Button = ({ imp, text, link, penultimate }) => {
    return (
        <div>
            <div className={`button ${imp === 'secondary' ? 'button__white' : ''}`}>
                <a href={link}>
                    {text}
                </a>
            </div>

        </div>
    )
}

export default Button
