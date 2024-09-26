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

const AddPlaceButton = lazy(() =>
  import("pics/AddPlaceButton").catch(() => {
    return {
      default: () => (
        <div className="error">Component AddPlaceButton is not available!</div>
      ),
    };
  }),
);

const PicsBlock = lazy(() =>
  import("pics/PicsBlock").catch(() => {
    return {
      default: () => (
        <div className="error">Component PicsBlock is not available!</div>
      ),
    };
  }),
);

export function Loading() {
  return <h2>🌀 Loading...</h2>;
}

function Main() {
  return (
    <main className="content">
        <section className="profile page__section">
          <Suspense fallback={<Loading />}>
            <ProfileBlock></ProfileBlock>
          </Suspense>

          <Suspense fallback={<Loading />}>
            <AddPlaceButton buttonClassName={'profile__add-button'} />
          </Suspense>
        </section>

        <section className="places page__section">
          <Suspense fallback={<Loading />}>
            <PicsBlock></PicsBlock>
          </Suspense>
        </section>
    </main>
  );
}

export default Main;
