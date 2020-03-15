import React from 'react'

function BodyHeading() {
    return (
        <div className="body-heading">
            <div className="container">
                <div className="body-heading-container">
                    <img src={process.env.PUBLIC_URL + '/images/line.png'} alt="line"/>
                    <p>welcome to <span>Musica,</span> check our latest albums</p>
                    <img src={process.env.PUBLIC_URL + '/images/line.png'} alt="line"/>
                </div>

                <div className="big-buttons">
                    <div className="big-btn-item">
                        <div>

                        <img src={process.env.PUBLIC_URL + '/images/Icons/body-heading-btn/cd.png'} alt="cd"></img>
                        <p>CHECK OUR CD COLLECTION</p>
                        </div>

                        <p>Donec pede justo, fringilla vel, al, vulputate 
                            eget, arcu. In enim justo, lorem ipsum.
                        </p>
                    </div>

                    <div className="big-btn-item red">
                        <div>

                        <img src={process.env.PUBLIC_URL + '/images/Icons/body-heading-btn/headphone.png'} alt="headphone"></img>
                        <p>LISTEN BEFORE PURCHASE</p>
                        </div>

                        <p>Donec pede justo, fringilla vel, al, vulputate 
                            eget, arcu. In enim justo, lorem ipsum.
                        </p>
                    </div>


                    <div className="big-btn-item upcoming">
                        <div>

                        <img src={process.env.PUBLIC_URL + '/images/Icons/body-heading-btn/calendar.png'} alt="headphone"></img>
                        <p>UPCOMING EVENTS</p>
                        </div>

                        <p>Donec pede justo, fringilla vel, al, vulputate 
                            eget, arcu. In enim justo, lorem ipsum.
                        </p>
                    </div>
                    
                </div>

                
            </div>
        </div>
    )
}
export default BodyHeading;