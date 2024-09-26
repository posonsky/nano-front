import { ProfileContext } from 'shared-profile-context';
import React from 'react';
import api from "../utils/api.js";

import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose }) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const { currentUser, setCurrentUser } = React.useContext(ProfileContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  React.useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser]);

  function handleUpdateUser(userUpdate) {
    api
      .setUserInfo(userUpdate)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        onClose();
      })
      .catch((err) => console.log(err));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}
      title="Редактировать профиль"
      name="edit"
    >
      <label className="popup__label">
        <input type="text" name="userName" id="owner-name"
               className="popup__input popup__input_type_name" placeholder="Имя"
               required minLength="2" maxLength="40" pattern="[a-zA-Zа-яА-Я -]{1,}"
               value={name || ''} onChange={handleNameChange} />
        <span className="popup__error" id="owner-name-error"></span>
      </label>
      <label className="popup__label">
        <input type="text" name="userDescription" id="owner-description"
               className="popup__input popup__input_type_description" placeholder="Занятие"
               required minLength="2" maxLength="200"
               value={description || ''} onChange={handleDescriptionChange} />
        <span className="popup__error" id="owner-description-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
