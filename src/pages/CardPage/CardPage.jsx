import React from 'react'
import Checkout from '././../Homepage/components/CardsSection/Checkout'
import { NavLink } from 'react-router-dom';

function CardPage({cards, onClickRemoveBtn}) {
    return (
        <div className="card-page-div">
            <div className="card-page-inner-container">
                <h1>Your Card</h1>
                    <div className="mb-div">

                    <Checkout cards={cards} onClickRemoveBtn={onClickRemoveBtn} isNewPage={true} />
                </div>
                <NavLink to="/" className="go-back-home-page">Go Back</NavLink>
            </div>
        </div>
    )
}

export default CardPage;
