import React from "react"
import { NavLink } from "react-router-dom";

import s from "./Login.module.scss"

import googleIcon from "../../img/login/google-icon.png"
import facebookIcon from "../../img/login/facebook-icon.png"
import { useDispatch } from "react-redux";
import { handleFormChangeLogin } from "../../actions/actions";

const Login = () => {
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name

        dispatch(handleFormChangeLogin({ [name]: value }));
    };




    return (
        <div className={s.Login}>
            <h1 className={s["Login-Title"]}>Login</h1>

            <form className={s["Login-Form"]}>

                <label htmlFor="loginEmail" className={s["Login-Label"]}>Email</label>
                <input type="email" id="loginEmail" className={s["Login-Input"]} name="userEmail"
                    onChange={handleInputChange} placeholder="Enter your email" required />

                <label htmlFor={"loginPassword"} className={s["Login-Label"]}>
                    <span>Password</span>
                    <NavLink to="/regovery-pasword" className={s["Login-PasswordRecoveryLabel"]}>Forgotten your password?</NavLink>
                </label>
                <input type="password" id={"loginPassword"} className={s["Login-Input"]} name="userPassword"
                    onChange={handleInputChange} placeholder="Enter your password" required />

                <button type="submit" className={s["Login-Button"]}>Login</button>

                <div className={s["Login-CreateAccountBox"]}>
                    <span>Don't have an account?</span>
                    <NavLink to="/registration">Create an account</NavLink>
                </div>

                <span className={s["Login-DecorLine"]}>or</span>

                <div className={s["Login-Social"]}>
                    <button type="button" className={s["Login-Button-google"]}>
                        <img className={s["Login-SocialIcon"]} src={googleIcon} alt="google" />
                        With Google
                        </button>
                    <button type="button" className={s["Login-Button-facebook"]}>
                        <img className={s["Login-SocialIcon"]} src={facebookIcon} alt="facebook" />
                        With Facebook
                        </button>
                </div>

            </form>

        </div>
    )
}

export default Login