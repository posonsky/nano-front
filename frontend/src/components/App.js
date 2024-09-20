import { ProfileContext } from "shared-profile-context";
import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Main, {Loading} from "./Main";
import Footer from "./Footer";
import ProtectedRoute from "./ProtectedRoute";

const ProfileHeader = lazy(() =>
  import("profile/ProfileHeader").catch(() => {
    return {
      default: () => (
        <div className="error">Component ProfileHeader is not available!</div>
      ),
    };
  }),
);
const Login = lazy(() =>
  import("profile/Login").catch(() => {
    return {
      default: () => (
        <div className="error">Component Login is not available!</div>
      ),
    };
  }),
);
const Register = lazy(() =>
  import("profile/Register").catch(() => {
    return {
      default: () => (
        <div className="error">Component Register is not available!</div>
      ),
    };
  }),
);

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [userEmail, setUserEmail] = React.useState("");

  return (
    <ProfileContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userEmail,
        setUserEmail,
      }}
    >
      <div className="page__content">
        <Suspense fallback={<Loading />}>
          <ProfileHeader />
        </Suspense>
        <Switch>
          <ProtectedRoute exact path="/" component={Main} />
          <Route path="/signup">
            <Suspense fallback={<Loading />}>
              <Register />
            </Suspense>
          </Route>
          <Route path="/signin">
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          </Route>
        </Switch>
      </div>
      <Footer />
    </ProfileContext.Provider>
  );
}

export default App;
