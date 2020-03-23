import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
Modal.setAppElement('#root')
function Card({
    id,
    title,
    artist,
    rate,
    description,
    price,
    imgPath,
    onClickAddBtn,
    salePrice = null,
    onClickAddFavorite,
    onClickRemoveFavorite,
    favorites

}) {
    const [star, setStar] = useState(false)
    const [isModalOpen, setIsModelOpen] = useState(false)
    useEffect(() => {
        for (let item of favorites) {
            if (item.id === id) {
                setStar(true);
                return;
            }
        }
        setStar(false);
    }, [favorites,id])

    const starClick = () => {

        if (!star) {
            onClickAddFavorite({
                id,
                title,
                artist,
                rate,
                description,
                price,
                salePrice,
                imgPath,
            })
        } else {
            onClickRemoveFavorite({
                id,
                title,
                artist,
                rate,
                description,
                price,
                salePrice,
                imgPath,
            })
        }


        setStar(!star)
    };

    const customModalStyles = {
        content: {
            margin: 'auto',
            width: '450px',
            height: '250px',
            borderRadius: '15px'

        }
    };




    return (
        <div className="main-card">

            <Modal
                isOpen={isModalOpen}
                style={customModalStyles}
                onRequestClose={() => setIsModelOpen(false)}>

                <div className="modal-container">

                    <h1>Are you sure ?</h1>

                    <div className="modal-button-container">
                        <button className="modal-ok" onClick={() => {
                            setIsModelOpen(false)
                            onClickAddBtn({
                                id,
                                title,
                                artist,
                                rate,
                                description,
                                price,
                                salePrice,
                                imgPath,
                            })


                        }}> YES </button>
                        <button className="modal-cancel" onClick={() => setIsModelOpen(false)}> CANCEL </button>

                    </div>
                </div>

            </Modal>


            <img src={imgPath} alt="main-img" />
            <div className="card-title-artist">
                <p className="card-title">{title}</p>
                <p className="card-artist">{artist}</p>

            </div>

            <div className="star-container">

                {
                    star ?
                        <svg onClickCapture={starClick} className="active-star" viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
                        :
                        <svg onClickCapture={starClick} className="nonactive-star" viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>

                }
            </div>
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

                    // Modal confirmation
                    setIsModelOpen(true);
                   



                }}>Add to card</button>


            </div>
        </div>
    )
}

export default Card;
