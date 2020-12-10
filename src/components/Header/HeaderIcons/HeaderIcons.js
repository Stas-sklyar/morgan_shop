import React from "react";
import {
    NavLink,
} from "react-router-dom";

import s from "../Header.module.scss"

import searchIcon from "../../../img/header/search-icon.png"
import loginIcon from "../../../img/header/login-icon.png"
import cartIcon from "../../../img/header/cart-icon.png"

const HeaderIcons = () => {

    return (
        <ul className={s["Header-Menu"]}>
            <li className={s["Header-Icon"]}>
                <NavLink to="/search">
                    <img src={searchIcon} alt="search" />
                </NavLink>
            </li>
            <li className={s["Header-Icon"]}>
                <NavLink to="/login">
                    <img src={loginIcon} alt="login" />
                </NavLink>
            </li>
            <li className={s["Header-Icon"]}>
                <NavLink to="/cart">
                    <img src={cartIcon} alt="cart" />
                </NavLink>
            </li>
        </ul>
    )
}

export default HeaderIcons