import React from 'react'
import background from '../Header/background.png';

const style = {
    backgroundImage: `url(${background})`
}


function ImportantPublisher() {
    return (
        <div className="important-publisher-section" style={style}>
            <div className="container">
                <div className="section-header">
                    <p>Our Most Important Publishers</p>
                    <div className="section-line-img">
                        <img src={process.env.PUBLIC_URL + '/images/line.png'} alt="line" />
                    </div>
                </div>


                <div className="publisher-container">
                    <img src={process.env.PUBLIC_URL + '/images/our_publishers/pic1.png'} alt="publisher" />
                    <img src={process.env.PUBLIC_URL + '/images/our_publishers/pic2.png'} alt="publisher" />
                    <img src={process.env.PUBLIC_URL + '/images/our_publishers/pic3.png'} alt="publisher" />
                    <img src={process.env.PUBLIC_URL + '/images/our_publishers/pic4.png'} alt="publisher" />
                    <img src={process.env.PUBLIC_URL + '/images/our_publishers/pic5.png'} alt="publisher" />
                    <img src={process.env.PUBLIC_URL + '/images/our_publishers/pic6.png'} alt="publisher" />

                </div>

                

            </div>
        </div>
    )
}
export default ImportantPublisher;