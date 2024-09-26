import { PicsContext } from "shared-profile-context";
import React from "react";

function AddPlaceButton({buttonClassName}) {
  const {
    cards,
    setCards,
    isAddPlacePopupOpen,
    setIsAddPlacePopupOpen
  } = React.useContext(PicsContext);

  const handleButtonClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  return (
    <button
      className={buttonClassName}
      type="button"
      onClick={handleButtonClick}>
    </button>
  )
}

export default AddPlaceButton