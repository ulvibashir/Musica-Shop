import React from 'react';
import AdditionalHeader from './components/Header/AdditionalHeader'
import MainHeader from './components/Header/MainHeader'
import ImageSection from './components/ImageSection/ImageSection'
import BodyHeading from './components/Body/BodyHeading';
import LatestArrival from './components/CardsSection/LatestArrival'
import AlbumsCurrently from './components/CardsSection/AlbumsCurrently'
import ImportantPublisher from './components/ImportantPublisher/ImportantPublisher'
import MainFooter from './components/MainFooter/MainFooter'
import Checkout from './components/CardsSection/Checkout'


function Homepage({
  isCheckOutOpen,
  cards,
  onCheckOutBtnClick,
  onClickAddBtn,
  onClickRemoveBtn,
  onClickAddFavorite,
  onClickRemoveFavorite,
  favorites
}) {
  





  return (
    <div className="Homepage">
      <AdditionalHeader onCheckOutBtnClick={onCheckOutBtnClick} count={cards.length} />
      {isCheckOutOpen &&

        <div className="container-checkout">
          <div className="inner-container">
            <Checkout cards={cards} onClickRemoveBtn={onClickRemoveBtn} isNewPage={false} />
          </div>
        </div>

      }
      <MainHeader />
      <ImageSection />
      <BodyHeading />
      <LatestArrival
        onClickAddBtn={onClickAddBtn}
        onClickAddFavorite={onClickAddFavorite}
        onClickRemoveFavorite={onClickRemoveFavorite}
        favorites={favorites} />
      <AlbumsCurrently
        onClickAddBtn={onClickAddBtn}
        onClickAddFavorite={onClickAddFavorite}
        onClickRemoveFavorite={onClickRemoveFavorite}
        favorites={favorites} />
      <ImportantPublisher />
      <MainFooter />
    </div>
  );
}

export default Homepage;