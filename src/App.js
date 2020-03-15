import React, { useState, useEffect } from 'react';
import './styles.sass';
import AdditionalHeader from './components/Header/AdditionalHeader'
import MainHeader from './components/Header/MainHeader'
import ImageSection from './components/ImageSection/ImageSection'
import BodyHeading from './components/Body/BodyHeading';
import LatestArrival from './components/CardsSection/LatestArrival'
import AlbumsCurrently from './components/CardsSection/AlbumsCurrently'
import ImportantPublisher from './components/ImportantPublisher/ImportantPublisher'
import MainFooter from './components/MainFooter/MainFooter'
import Checkout from './components/CardsSection/Checkout'
import { addCard, cardFetch, editCard, deleteCard} from './API/fetchAPI'


function App() {
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false)
  const [cards, setCard] = useState([])

  const onClickAddBtn = (e, newCard) => {

    const isExist = cards.find(item => item.id === newCard.id);

    if (isExist) {
      setCard(card => card.map(item => {
        if (item.id === newCard.id) {

            //Edit card localStorage
            editCard(`/${newCard.id}`,{
              ...item,
              count: item.count + 1
            })
          return {
            ...item,
            count: item.count + 1
          }
        }
        return item;
      }))
      
    } 
    
    else {
      setCard(card => {


        // Add card localStorage
        addCard('', {
          ...newCard,
          count: 1
        });

        return [...card, {
          ...newCard,
          count: 1
        }]
      }


      )
    }

    console.log(newCard)

  }

  const onClickRemoveBtn = (e, oldCard) => {
    if (oldCard.count > 1) {
      setCard(cart => cart.map(item => {
        if (item.id === oldCard.id) {


          editCard(`/${oldCard.id}`,{
            ...item,
            count: item.count - 1
          })
          
          return {
            ...item,
            count: item.count - 1,
          }
        }
        return item
      }))
    } else {
      deleteCard(`/${oldCard.id}`)
      setCard(cart => cart.filter(item => item.id !== oldCard.id))
    }
  }


  useEffect(() => {
    (async () => {
      const newData = await cardFetch();
      setCard(newData)
    })()
  }, [])

  const onCheckOutBtnClick = () => setIsCheckOutOpen(!isCheckOutOpen);







  return (
    <div className="App">
      <AdditionalHeader onCheckOutBtnClick={onCheckOutBtnClick} count={cards.length} />
      {isCheckOutOpen && <Checkout cards={cards} onClickRemoveBtn={onClickRemoveBtn} />}
      <MainHeader />
      <ImageSection />
      <BodyHeading />
      <LatestArrival onClickAddBtn={onClickAddBtn} />
      <AlbumsCurrently onClickAddBtn={onClickAddBtn} />
      <ImportantPublisher />
      <MainFooter />
    </div>
  );
}

export default App;
