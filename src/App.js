import React, {useState, useEffect} from 'react';
import './styles.sass';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage'
import FavoritesPage from './pages/Favorites/FavoritesPage'
import CardPage from './pages/CardPage/CardPage'
import { addCard, cardFetch, editCard, deleteCard, addFavorite, deleteFavorite, favoritesFetch } from './API/fetchAPI'




function App() {
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false)
  const [cards, setCard] = useState([])
  const [favorites, setFavorites] = useState([])


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


  const onClickAddFavorite = (newCard) => {
    console.log(favorites)
    addFavorite('', newCard);
    setFavorites([...favorites, newCard])
  }
  const onClickRemoveFavorite = (oldCard) => {
    deleteFavorite(`/${oldCard.id}`, oldCard);
    setFavorites(item => item.filter(item => item.id !== oldCard.id))

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
