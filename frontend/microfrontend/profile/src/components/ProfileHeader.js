import React from "react";
import { Route, Link, useHistory } from "react-router-dom";
import * as auth from "../utils/auth.js";

import { ProfileContext } from "shared-profile-context";

function ProfileHeader() {
  const history = useHistory();
  const { currentUser, setCurrentUser, userEmail, setUserEmail } =
    React.useContext(ProfileContext);

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setUserEmail("");
    setCurrentUser({});
    history.push("/signin");
  };

  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token !== null) {
      auth
        .checkToken(token)
        .then((res) => {
          // console.log(res.data);
          setUserEmail(res.data.email);
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("jwt");
          setUserEmail("");
          setCurrentUser({});
          history.push("/signin");
        });
    }
  }, [history, setUserEmail, setCurrentUser]);

  return (
    <header className="header page__section">
      <Route exact path="/">
        <div className="header__wrapper">
          <p className="header__user">{userEmail}</p>
          <button className="header__logout" onClick={handleSignOut}>
            Выйти
          </button>
        </div>
      </Route>
      <Route path="/signup">
        <Link className="header__auth-link" to="signin">
          Войти
        </Link>
      </Route>
      <Route path="/signin">
        <Link className="header__auth-link" to="signup">
          Регистрация
        </Link>
      </Route>
    </header>
  );
}

export default ProfileHeader;
