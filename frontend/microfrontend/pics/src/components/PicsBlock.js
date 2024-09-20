import React, { startTransition } from "react";
import api from "../utils/api.js";

import AddPlacePopup from './AddPlacePopup.js'
import Card from './Card.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from "./PopupWithForm.js";

function PicsBlock() {
  // const { currentUser, setCurrentUser } = React.useContext(ProfileContext);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  React.useEffect(() => {
    api
      .getCardList()
      .then((cardData) => {
        // setCurrentUser(userData);
        startTransition(() => {
            setCards(cardData);
        });
      })
      .catch((err) => console.log(err));
  }, [setCards]);

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    // setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    // setIsEditAvatarPopupOpen(false);
    // setIsInfoToolTipOpen(false);
    setSelectedCard(null);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((cards) =>
          cards.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit(newCard) {
    api
      .addCard(newCard)
      .then((newCardFull) => {
        setCards([newCardFull, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <ul className="places__list">
        {
          cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
        ))}
      </ul>
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onAddPlace={handleAddPlaceSubmit}
        onClose={closeAllPopups}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm title="Вы уверены?" name="remove-card" buttonText="Да" />
    </>
  );
}

export default PicsBlock