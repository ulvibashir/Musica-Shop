import React, {useState, useEffect} from 'react';
import './styles.sass';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  CardPage,
  FavoritesPage,
  Homepage
} from './pages'

import {
  addCard,
  cardFetch,
  editCard,
  deleteCard,
  addFavorite,
  deleteFavorite,
  favoritesFetch
} from './API/fetchAPI'




function App() {
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false)
  const [cards, setCard] = useState([])
  const [favorites, setFavorites] = useState([])

  
  const onClickAddBtn = (newCard) => {

    const isExist = cards.find(item => item.id === newCard.id);

    if (isExist) {
      setCard(card => card.map(item => {
        if (item.id === newCard.id) {

            //Edit card on db.json
            editCard(`/${newCard.id}`,{
              ...item,
              count: item.count + 1
            })

            //Edit card on LocalStorage
            let tmp = JSON.parse(localStorage.getItem('card'));

            for (let localCard of tmp){
              if(localCard.id === newCard.id){
                localCard.count++;
              }
            }
            localStorage.setItem('card', JSON.stringify(tmp))   


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

        // Add card to db.json
        addCard('', {
          ...newCard,
          count: 1
        });


        //Add card to LocalStorage
        let tmp = JSON.parse(localStorage.getItem('card'))
        if (tmp) {

          tmp = [...tmp, {
            ...newCard,
            count: 1
          }]
          localStorage.setItem('card', JSON.stringify(tmp))

        } else {

          localStorage.setItem('card', JSON.stringify([{
            ...newCard,
            count: 1
          }]))
        }

        return [...card, {
          ...newCard,
          count: 1
        }]
      }


      )
    }


  }

  const onClickRemoveBtn = (oldCard) => {
    if (oldCard.count > 1) {
      setCard(cart => cart.map(item => {
        if (item.id === oldCard.id) {

          // Edit on db.json
          editCard(`/${oldCard.id}`,{
            ...item,
            count: item.count - 1
          })
          
          //Edit card on LocalStorage
          let tmp = JSON.parse(localStorage.getItem('card'));

          for (let localCard of tmp){
            if(localCard.id === oldCard.id){
              localCard.count--;
            }
          }
          localStorage.setItem('card', JSON.stringify(tmp))


          return {
            ...item,
            count: item.count - 1,
          }
        }
        return item
      }))
    } else {

      // Remove on db.json
      deleteCard(`/${oldCard.id}`)
      setCard(cart => cart.filter(item => item.id !== oldCard.id))

      //Remove card on LocalStorage
      let tmp = JSON.parse(localStorage.getItem('card'));
      tmp = tmp.filter(localCard => localCard.id !== oldCard.id);
      localStorage.setItem('card', JSON.stringify(tmp))
      
    }
  }


  const onClickAddFavorite = (newCard) => {

    //Add to localStorage

    let favoritesLocal = JSON.parse(localStorage.getItem('favorites'))
    if(favoritesLocal){
      localStorage.setItem('favorites',JSON.stringify([...favoritesLocal,newCard]))
    } else {
      localStorage.setItem('favorites',JSON.stringify([newCard]))
    }
    
    addFavorite('', newCard);
    setFavorites([...favorites, newCard])
  }
  const onClickRemoveFavorite = (oldCard) => {
    deleteFavorite(`/${oldCard.id}`, oldCard);
    setFavorites(item => item.filter(item => item.id !== oldCard.id))


    //Remove from localStorage
    let favoritesLocal = JSON.parse(localStorage.getItem('favorites'))
    favoritesLocal = favoritesLocal.filter(item => item.id !== oldCard.id);
    localStorage.setItem('favorites', JSON.stringify(favoritesLocal))
  }



  useEffect(() => {
    (async () => {
      const newData = await favoritesFetch();
      setFavorites(newData)
    })()

  }, [])


  useEffect(() => {
    (async () => {
      const newData = await cardFetch();
      setCard(newData)
    })()
  }, [])









  const onCheckOutBtnClick = () => setIsCheckOutOpen(!isCheckOutOpen);

  return (
    <Router>

    
      <Switch>
        <Route exact path="/" render={(props) => (<Homepage {...props} 
              isCheckOutOpen={isCheckOutOpen}
              cards={cards}
              onCheckOutBtnClick={onCheckOutBtnClick}
              onClickAddBtn={onClickAddBtn}
              onClickRemoveBtn={onClickRemoveBtn}
              onClickAddFavorite={onClickAddFavorite}
              onClickRemoveFavorite={onClickRemoveFavorite}
              favorites={favorites}
        
         />)} />
        

        <Route exact path="/card" render={(props) => (<CardPage {...props} 
            cards={cards}
            onClickRemoveBtn={onClickRemoveBtn}
        />)} />
        <Route exact path="/favorites" render={(props) => (<FavoritesPage {...props} 
              favorites={favorites} 
              onClickAddFavorite={onClickAddFavorite}
              onClickRemoveFavorite={onClickRemoveFavorite}
              /> )} />

        <Route render={() => (<h1>404 Not Found</h1>)} />
      </Switch>
    </Router>
  );
}

export default App;
