import { ProfileContext } from "shared-profile-context";
import React from "react";

import AddPlaceButton from './AddPlaceButton.js';
import PicsBlock from "./PicsBlock.js";

function Pics() {
  const [currentUser, setCurrentUser] = React.useState({});

  return (
    <ProfileContext.Provider
      value={{
        currentUser,
        setCurrentUser}}
    >
      <div className="page__content">
        <main className="content">
          <section className="profile page__section">
            <AddPlaceButton buttonClassName={'profile__add-button'} />
          </section>

          <section className="places page__section">
            <PicsBlock></PicsBlock>
          </section>
        </main>
      </div>
    </ProfileContext.Provider>
  );
}

export default Pics;
