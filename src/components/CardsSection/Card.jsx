import React from 'react'
// import { Rate } from 'antd'
// import 'antd/dist/antd.css'  

function Card({
    id,
    title,
    artist,
    rate,
    description,
    price,
    imgPath,
    onClickAddBtn,
    salePrice = null }) {

    
    
    return (
        <div className="main-card">
            <img src={imgPath} alt="main-img"/>
            <div className="card-title-artist">
                <p className="card-title">{title}</p>
                <p className="card-artist">{artist}</p>
            </div>
            {/* <Rate/> */}
            
            <p className="card-description">{description}</p>
            <div className="price-discount-div">
                {
                    salePrice ?
                        <p className="card-price-old">${price}</p>
                        :
                        <p className="card-price">${price}</p>
                }
                {salePrice && <p className="card-sale-price">${salePrice}</p>}



                <button onClick={(e) => {
                    onClickAddBtn(e,{
                        id,
                        title,
                        artist,
                        rate,
                        description,
                        price,
                        salePrice,
                        imgPath,
                    })
                }}>Add to card</button>


            </div>
        </div>
    )
}

export default Card;
