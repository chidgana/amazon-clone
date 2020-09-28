import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const createAccount = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("auth", auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png"
          alt=""
        ></img>
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            type="text"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <button
            onClick={signIn}
            type="submit"
            className="login__signInButton"
          >
            Sign-In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's condition of Use & sale.Please see
          Our privacy Notice, our cookies Notice and our Intrest-Based ads
          Notice
        </p>

        <button onClick={createAccount} className="login__registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
