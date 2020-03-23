import React, { useState } from 'react'
import Modal from 'react-modal'

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

    const [isModalOpen, setIsModelOpen] = useState(false)
    const customModalStyles = {
        content: {
            margin: 'auto',
            width: '450px',
            height: '250px',
            borderRadius: '15px',
        }
    };

    return (
        <div className="checkout-item">

            <Modal
                isOpen={isModalOpen}
                style={customModalStyles}
                onRequestClose={() => setIsModelOpen(false)}>

                <div className="modal-container">

                    <h1>Are you sure ?</h1>

                    <div className="modal-button-container">
                        <button className="modal-ok" onClick={() => {
                            setIsModelOpen(false)
                            onClickRemoveBtn({ id, count })


                        }}> YES </button>
                        <button className="modal-cancel" onClick={() => setIsModelOpen(false)}> CANCEL </button>

                    </div>
                </div>

            </Modal>


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
                    <button onClick={(e) => {
                        setIsModelOpen(true);
                    }}>X</button>
                </div>
            </div>
        </div>
    )
}
export default CheckoutItem;