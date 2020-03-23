import React, { useState, useEffect } from 'react'
import Card from './Card'
import { musicsFetch } from '../../../../API/fetchAPI';
import background from '../Header/background.png';

const style = {
    backgroundImage: `url(${background})`
}
export function LatestArrival({onClickAddBtn, onClickRemoveFavorite, onClickAddFavorite, favorites}) {

    const [data, setData] = useState([]);

    // First index of card which will be shown / activeStar --> activeStart + 4
    const [activeStart, setActiveStart] = useState(0);

    useEffect(() => {
        (async () => {
            const newData = await musicsFetch();
            setData(newData);
        })()
    }, [])
    
    const onGoLeft = () => {
        if(activeStart > 0){
            setActiveStart(activeStart => activeStart - 1)
       }
    }

    const onGoRight = () => {
        if(activeStart < data.length - 4){
            setActiveStart(activeStart => activeStart + 1)
        }

    }

    return (
        <div className="latest-arrival-section" style={style}>
            <div className="container">
                <div className="section-header">
                    <p>Latest Arrivals in Musica</p>
                    <div className="section-line-img">
                        <img src={process.env.PUBLIC_URL + '/images/line.png'} alt="line" />
                    </div>
                    <div>

                        {
                            activeStart !== 0 &&
                             <button onClick={onGoLeft}>←</button>
                        }
                        {
                            activeStart !== data.length - 4 &&
                            <button onClick={onGoRight}>→</button>
                        }
                    </div>
                </div>


                <div className="cards-div-slider">
                    <div className="cards-div-slider-wrapper" style={{
                        'transform': `translateX(-${activeStart*(303)}px)`
                    }}>
                        {data.map(({ id, title, artist, rate, description, price, salePrice, imgPath }) => (
                            <Card id={id}
                                title={title}
                                artist={artist}
                                rate={rate}
                                description={description}
                                price={price}
                                salePrice={salePrice}
                                imgPath={process.env.PUBLIC_URL + imgPath}
                                key={id}
                                onClickAddBtn={onClickAddBtn}
                                onClickRemoveFavorite ={onClickRemoveFavorite}
                                onClickAddFavorite ={onClickAddFavorite}
                                favorites={favorites}
                            />

                        ))}
                    </div>

                </div>

            </div>
        </div>
    )
}

