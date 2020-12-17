import React from "react"
import { NavLink } from "react-router-dom"

import s from "./Registration.module.scss"

import googleIcon from "../../../img/login/google-icon.png"
import facebookIcon from "../../../img/login/facebook-icon.png"
import { useDispatch } from "react-redux"
import { handleFormChangeRegistration } from "../../../actions/actions"

const Registration = () => {
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name

        dispatch(handleFormChangeRegistration({ [name]: value }));
    };

    return (
        <div className={s.Registration}>
            <h1 className={s["Registration-Title"]}>Registration</h1>

            <form className={s["Registration-Form"]}>
                <label className={s["Registration-Label"]}>
                    Full name
                    <input name="userName" onChange={handleInputChange}
                        className={s["Registration-Input"]} placeholder="Enter your First and Last name" />
                </label>

                <label className={s["Registration-Label"]}>
                    Email
                    <input name="userEmail" onChange={handleInputChange}
                        className={s["Registration-Input"]} placeholder="Enter your email" />
                </label>

                <label className={s["Registration-Label"]}>
                    Password (min 6 char)
                    <input name="userPassword" onChange={handleInputChange}
                        className={s["Registration-Input"]} placeholder="Enter your password" />
                </label>

                <p className={s["Registration-Info"]}>
                    By creating an account you agree to the website <span className={s["Registration-Info_link"]}>terms and conditions</span> and our <span className={s["Registration-Info_link"]}>privacy notice</span>.
                </p>
                <button className={s["Registration-Button"]} type="button">CREATE AN ACCOUNT</button>
            </form>

            <div className={s["Registration-LoginBox"]}>
                <span>Have an account?</span>
                <NavLink to="/login" className={s["Registration-Link"]}>Login</NavLink>
            </div>

            <div className={s["Registration-DecorLine"]}>or</div>

            <div className={s["Registration-Social"]}>
                <button type="button" className={s["Registration-Button-google"]}>
                    <img className={s["Registration-SocialIcon"]} src={googleIcon} alt="google" />
                        With Google
                        </button>
                <button type="button" className={s["Registration-Button-facebook"]}>
                    <img className={s["Registration-SocialIcon"]} src={facebookIcon} alt="facebook" />
                        With Facebook
                        </button>
            </div>

        </div>
    )
}

export default Registration