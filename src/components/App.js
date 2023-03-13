import React, { useState, useRef } from "react";
import "../styles/App.css";
import User from "../models/user";

const App = () => {
    const [signupValue, setSignupValue] = useState({
        email: "",
        password: "",
        name: "",
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const emailInput = useRef();
    const passwordInput = useRef();
    const confirmPassInput = useRef();
    const nameInput = useRef();
    const loginEmail = useRef();
    const loginPassword = useRef();
    const handleSignup = (e) => {
        // e.preventDefault();
        if (passwordInput.current.value !== confirmPassInput.current.value)
            return;
        setSignupValue({
            email: emailInput.current.value,
            password: passwordInput.current.value,
            name: nameInput.current.value,
        });
    };
    const handleAuth = () => {
        if (
            isLoggedIn === false &&
            signupValue.email === loginEmail.current.value &&
            signupValue.password === loginPassword.current.value
        ) {
            setIsLoggedIn((loginStatus) => true);
        } else {
            setIsLoggedIn((loginStatus) => false);
        }
    };
    // const newUser = new User("email", "password", "name");
    return (
        <div id="main">
            <table id="all-users">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                    <tr>
                        <td>{signupValue.name}</td>
                        <td>{signupValue.email}</td>
                        <td>{signupValue.password}</td>
                    </tr>
                </tbody>
            </table>
            {!isLoggedIn && (
                <div>
                    <form className="signup-form">
                        <label htmlFor="name">Name</label>
                        <input
                            ref={nameInput}
                            type="text"
                            name="signupName"
                            id="signupName"
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            ref={emailInput}
                            type="email"
                            name="signupEmail"
                            id="signupEmail"
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            ref={passwordInput}
                            type="password"
                            name="signupPassword"
                            id="signupPassword"
                        />
                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            ref={confirmPassInput}
                            type="password"
                            name="signupConfirmPassword"
                            id="signupConfirmPassword"
                        />
                    </form>
                    <button onClick={handleSignup} id="signup-button">
                        Signup
                    </button>
                    <form className="login-styles">
                        <label htmlFor="loginEmail">Email</label>
                        <input
                            ref={loginEmail}
                            id="loginEmail"
                            name="loginEmail"
                            type="email"
                        />
                        <label htmlFor="loginPassword">Password</label>
                        <input
                            ref={loginPassword}
                            id="loginPassword"
                            name="loginPassword"
                            type="password"
                        />
                    </form>
                    <button onClick={handleAuth} id="login-button">
                        Login
                    </button>
                </div>
            )}
            {isLoggedIn && (
                <div>
                    <h3 id="username">{signupValue.name}</h3>
                    <h3 id="email">{signupValue.email}</h3>
                    <button onClick={handleAuth} id="logout-button">
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default App;
