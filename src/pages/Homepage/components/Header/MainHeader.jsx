import React from 'react'
import background from './background.png';

const style = {
    backgroundImage: `url(${background})`
}
export function MainHeader() {
    return (    
        <div className="main-header" style={style}>
            <div className="container">
                <div className="main-header-container">
                    <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" />

                    <ul className="main-header-links">

                        <li>Home</li>
                        <li>CD`s</li>
                        <li>Listen</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}