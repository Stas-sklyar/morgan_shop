import React from "react";
import {
    NavLink,
} from "react-router-dom";
import { connect } from "react-redux";

import s from "../Header.module.scss"

import searchIcon from "../../../img/header/search-icon.png"
import loginIcon from "../../../img/header/login-icon.png"
import cartIcon from "../../../img/header/cart-icon.png"

const HeaderIcons = ({ amountProductsInCart }) => {

    return (
        <ul className={s["Header-Menu"]}>
            <li className={s["Header-Icon"]}>
                <img src={searchIcon} alt="search" />
            </li>
            <li className={s["Header-Icon"]}>
                <NavLink to="/login" activeClassName={s["Header-Icon_active"]}>
                    <img src={loginIcon} alt="login" />
                </NavLink>
            </li>
            <li className={s["Header-Icon"]}>
                <NavLink className={s["Header-Icon_cart"]} to="/cart" activeClassName={s["Header-Icon_active"]}>
                    <img src={cartIcon} alt="cart" />
                    <span>{amountProductsInCart}</span>
                </NavLink>
            </li>
        </ul>
    )
}

const mapStateToProps = (state) => ({
    amountProductsInCart: state.amountProductsInCart
});

export default connect(mapStateToProps)(HeaderIcons)
