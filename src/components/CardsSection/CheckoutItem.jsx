import React from 'react'

function CheckoutItem({
    id,
    title,
    artist,
    rate,
    price,
    imgPath,
    salePrice = null,
    count,
    onClickRemoveBtn }) {
    return (
        <div className="checkout-item">
            <img src={imgPath} alt="checkout-img" />
            <div className="checkout-about">
                <div className="checkout-title-artist-price-div">
                    <p className="checkout-title">{count}x {title}</p>
                    <p className="checkout-artist">{artist}</p>
                    {
                        salePrice ?
                            <p className="checkout-price">${salePrice}</p>
                            :
                            <p className="checkout-price">${price}</p>
                    }

                </div>


                <div className="rate-button">
                    {/* Rate */}
                    <button onClick={(e) => onClickRemoveBtn(e,{
                        id,
                        count
                    })}>X</button>
                </div>
            </div>
        </div>
    )
}
export default CheckoutItem;