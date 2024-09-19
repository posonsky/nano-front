import { ProfileContext } from 'shared-profile-context';
import React from 'react';
import api from "../utils/api.js";

import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose }) {
  const inputRef = React.useRef();
  const { currentUser, setCurrentUser } = React.useContext(ProfileContext);

  function handleUpdateAvatar(avatarUpdate) {
    api
      .setUserAvatar(avatarUpdate)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        onClose();
      })
      .catch((err) => console.log(err));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}
      title="Обновить аватар"
      name="edit-avatar"
    >
      <label className="popup__label">
        <input id="owner-avatar"
          type="url" name="avatar"
          className="popup__input popup__input_type_description"
          placeholder="Ссылка на изображение"
          required ref={inputRef} />
        <span className="popup__error" id="owner-avatar-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
