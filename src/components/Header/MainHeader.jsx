import React from 'react'
function MainHeader() {
    return (
        <div className="main-header">
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

export default MainHeader;
