import React from 'react'
import FavoriteItem from './FavoriteItem'
import { NavLink } from 'react-router-dom'
function FavoritesPage({ favorites, onClickAddFavorite, onClickRemoveFavorite }) {
    console.log(favorites)
    return (

        <div className="card-page-div">
            <div className="card-page-inner-container">
                <h1>Your Favorites</h1>
                <div className="mb-div">

                    <div className="checkout-panel">
                        {favorites.map(({ id, title, artist, rate, price, imgPath, salePrice, }) => (
                            <FavoriteItem id={id}
                                title={title}
                                artist={artist}
                                rate={rate}
                                price={price}
                                imgPath={imgPath}
                                salePrice={salePrice}
                                key={id}
                                onClickAddFavorite={onClickAddFavorite}
                                onClickRemoveFavorite={onClickRemoveFavorite}
                                favorites={favorites}
                            />
                        ))}

                    </div>
                </div>
                <NavLink to="/" className="go-back-home-page">Go Back</NavLink>
            </div>
        </div>


    )
}
export default FavoritesPage;
