import React, { lazy, Suspense } from "react";

const ProfileBlock = lazy(() =>
  import("profile/ProfileBlock").catch(() => {
    return {
      default: () => (
        <div className="error">Component ProfileBlock is not available!</div>
      ),
    };
  }),
);

const PicsStub = lazy(() =>
  import("pics/PicsStub").catch(() => {
    return {
      default: () => (
        <div className="error">Component PicsStub is not available!</div>
      ),
    };
  }),
);


function Main() {
  return (
    <main className="content">
      <section className="profile page__section">
        <Suspense>
          <ProfileBlock></ProfileBlock>
        </Suspense>
        <button className="profile__add-button" type="button"></button>
      </section>

      <section className="places page__section">
        <ul className="places__list">
        <PicsStub></PicsStub>
        {/*
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        */}
        </ul>
      </section>
    </main>
  );
}

export default Main;
