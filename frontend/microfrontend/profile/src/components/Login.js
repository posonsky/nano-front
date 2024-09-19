import { ProfileContext } from "shared-profile-context";
import React from "react";
import { useHistory } from "react-router-dom";
import * as auth from "../utils/auth.js";

import InfoTooltip from "./InfoTooltip.js";

function Login() {
  const { currentUser, setCurrentUser, userEmail, setUserEmail } =
    React.useContext(ProfileContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);
  const [tooltipStatus, setTooltipStatus] = React.useState("");

  const history = useHistory();

  function onLogin({ email, password }) {
    auth
      .login(email, password)
      .then((res) => {
        setUserEmail(email);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setTooltipStatus("fail");
        setIsInfoToolTipOpen(true);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    onLogin(userData);
  }

  function handleClose() {
    setIsInfoToolTipOpen(false);
  }

  return (
    <>
      <div className="auth-form">
        <form className="auth-form__form" onSubmit={handleSubmit}>
          <div className="auth-form__wrapper">
            <h3 className="auth-form__title">Вход</h3>
            <label className="auth-form__input">
              <input
                type="text"
                name="name"
                id="email"
                className="auth-form__textfield"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="auth-form__input">
              <input
                type="password"
                name="password"
                id="password"
                className="auth-form__textfield"
                placeholder="Пароль"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <button className="auth-form__button" type="submit">
            Войти
          </button>
        </form>
      </div>

      <InfoTooltip
        isOpen={isInfoToolTipOpen}
        onClose={handleClose}
        status={tooltipStatus}
      />
    </>
  );
}

export default Login;
