import React from 'react'

export function AdditionalHeader({onCheckOutBtnClick, count}) {
    return (

        <div className="additional-header">
            <div className="container">
                <div className="additional-header-container">


                    <div className="icons">
                        <img src={process.env.PUBLIC_URL + '/images/Icons/facebook.png'} alt="facebook" />
                        <img src={process.env.PUBLIC_URL + '/images/Icons/dribble.png'} alt="dribble" />
                        <img src={process.env.PUBLIC_URL + '/images/Icons/twitter.png'} alt="twitter" />
                        <img src={process.env.PUBLIC_URL + '/images/Icons/mail.png'} alt="mail" />
                        <img src={process.env.PUBLIC_URL + '/images/Icons/vimeo.png'} alt="vimeo" />
                    </div>

                        
                    <div className="link-button">
                        <p className="link" href="#">Login</p>
                            <p>/</p>
                        <p className="link" href="#">Register</p>


                        <button className="card-btn" onClick={onCheckOutBtnClick}>
                            <img src={process.env.PUBLIC_URL + '/images/Icons/card.png'} alt="card"/>
                            <p>Card</p>
                            <p>({count})</p>
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}