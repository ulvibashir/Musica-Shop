import React from 'react';


import {
  BodyHeading,
  LatestArrival,
  AlbumsCurrently,
  Checkout,
  MainHeader,
  AdditionalHeader,
  ImageSection,
  ImportantPublisher,
  MainFooter
} from './components';


export function Homepage({
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