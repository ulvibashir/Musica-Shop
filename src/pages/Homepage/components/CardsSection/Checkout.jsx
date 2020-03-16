import React from 'react'
import CheckoutItem from './CheckoutItem';
import { NavLink } from 'react-router-dom'



function Checkout({ cards, onClickRemoveBtn, isNewPage }) {

    const total = () => {
        let sum = 0;
        for (let item of cards) {
            if (item.salePrice !== null) {
                sum += Number(item.salePrice) * item.count
            } else {
                sum += Number(item.price) * item.count
            }
        }
        return sum;
    }


    return (
        
                <div className="checkout-panel">
                    {cards.map(({ id, title, artist, rate, price, imgPath, salePrice, count }) => (
                        <CheckoutItem id={id}
                            title={title}
                            artist={artist}
                            rate={rate}
                            price={price}
                            imgPath={imgPath}
                            salePrice={salePrice}
                            count={count}
                            key={id}
                            onClickRemoveBtn={onClickRemoveBtn}
                        />
                    ))}



                    <div className="total-price">
                        <p className="total-text">Total delivery cost: </p>
                        <p className="total-value">${(Math.round((total()) * 100) / 100)}</p>

                    </div>


                    { !isNewPage &&

                        <div className="checkout-btn">
                            <NavLink className="go-card-btn" to="/card">View Card -→</NavLink>
                            
                            <NavLink className="go-card-btn" to="/favorites">Favorites -→</NavLink>

                        </div>
                    }
                </div>
   

    )
}

export default Checkout;
