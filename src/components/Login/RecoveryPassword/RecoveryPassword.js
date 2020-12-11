import React from "react"
import { NavLink } from "react-router-dom"

import s from "./RecoveryPassword.module.scss"

const RecoveryPassword = () => {
    return (
        <div className={s.RecoveryPassword}>
            <h1 className={s["RecoveryPassword-Title"]}>RESET YOUR PASSWORD</h1>
            <p className={s["RecoveryPassword-Text"]}>Enter the email address for your Morgan account and we’ll send a single-use password reset link.</p>
            <p className={s["RecoveryPassword-Text"]}>This link will expire after 24 hours.</p>
            <form className={s["RecoveryPassword-Form"]}>
                <label className={s["RecoveryPassword-Label"]}>
                    Email
                    <input className={s["RecoveryPassword-Input"]} type="text" />
                </label>
                <button className={s["RecoveryPassword-Button"]} type="submit">SEND A PASSWORD RESET LINK</button>
                <NavLink className={s["RecoveryPassword-Link"]} to={"/login"}>Back to login</NavLink>
            </form>

        </div>
    )
}

export default RecoveryPassword