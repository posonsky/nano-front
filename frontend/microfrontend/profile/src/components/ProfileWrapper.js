import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import ProfileBlock from './ProfileBlock.js';

function ProfileWrapper({ onEditProfile, onEditAvatar }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile page__section">
        <ProfileBlock
          currentUser={ currentUser }
          onEditProfile={ onEditProfile }
          onEditAvatar={ onEditAvatar }
        />
      </section>
    </main>
  );
}

export default ProfileWrapper;
