import { ProfileContext } from "shared-profile-context";
import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./Login.js";
import ProfileHeader from "./ProfileHeader.js";
import ProfileWrapper from "./ProfileWrapper.js";
import ProtectedRoute from "./ProtectedRoute";
import Register from "./Register.js";

function Profile() {
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
        <ProfileHeader />

        <Switch>
          <ProtectedRoute exact path="/" component={ProfileWrapper} />
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
        </Switch>
      </div>
    </ProfileContext.Provider>
  );
}

export default Profile;
