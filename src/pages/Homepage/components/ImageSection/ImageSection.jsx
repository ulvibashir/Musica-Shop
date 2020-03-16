 import React, { useState, useEffect } from 'react'
const slideImages = [
    process.env.PUBLIC_URL + '/images/SlideImages/main.png',
    process.env.PUBLIC_URL + '/images/SlideImages/main2.png',
    process.env.PUBLIC_URL + '/images/SlideImages/main3.png',
    process.env.PUBLIC_URL + '/images/SlideImages/main4.png',
    process.env.PUBLIC_URL + '/images/SlideImages/main5.png'
];


let timeInterval = null;

function ImageSection() {
    const [active, setActive] = useState(0)

    const onClickLeft = () => {
        if (active >= 1)
            setActive(active => active - 1)

    }

    const onClickRight = () => {
        if (active < slideImages.length - 1)
            setActive(active => active + 1)
    }


    const autoPlay = () => {
        if(timeInterval) clearTimeout(timeInterval)
        timeInterval = setTimeout(() => {
                if (active === 4) {
                    setActive(active => active - 4)
                } else {
                    setActive(active => active + 1)
                }
            }, 5000);
    }

    useEffect(autoPlay)



    return (
        <div className="image-section">
            <div className="arrow-btn-container">

                <button className="left-btn" onClick={onClickLeft}>
                    <img src={process.env.PUBLIC_URL + '/images/Icons/arrows/left.png'} alt="arrow-left"></img>
                </button>

                <button className="right-btn" onClick={onClickRight}>
                    <img src={process.env.PUBLIC_URL + '/images/Icons/arrows/right.png'} alt="arrow-right"></img>
                </button>

            </div>

            <div className="image-container">


                <div className={`card-slider active-card-${active}`}>
                    <div className="card-slider-wrapper" style={{
                        width: `${slideImages.length * 100}%`,
                        'transform': `translateX(-${active * (100 / slideImages.length)}%)`
                    }}>
                        
                        {
                            slideImages.map((item, index) => <img src={item} key={index} id={`card-${index}`} alt="section"></img>)
                        }


                    </div>
                </div>



            </div>
        </div>
    )
}

export default ImageSection;
