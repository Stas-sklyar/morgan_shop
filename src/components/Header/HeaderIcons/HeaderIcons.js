import React, { useState } from "react";
import {
    NavLink,
} from "react-router-dom";
import { connect } from "react-redux";

import s from "../Header.module.scss"

import searchIcon from "../../../img/header/search-icon.png"
import loginIcon from "../../../img/header/login-icon.png"
import cartIcon from "../../../img/header/cart-icon.png"
import CartHover from "../../CartHover/CartHover";

const HeaderIcons = ({ productsInCart }) => {
    const [cartOpen, setCartOpen] = useState(false);


    return (
        <>
            <ul className={s["Header-Menu"]}>
                <li className={s["Header-Icon"]}>
                    <img src={searchIcon} alt="search" />
                </li>
                <li className={s["Header-Icon"]}>
                    <NavLink to="/login" activeClassName={s["Header-Icon_active"]}>
                        <img src={loginIcon} alt="login" />
                    </NavLink>
                </li>
                <li onMouseEnter={() => setCartOpen(true)}
                    onClick={() => cartOpen ? setCartOpen(false) : setCartOpen(true)} className={s["Header-Icon"]}>
                    <span
                        className={s["Header-Icon_cart"]}
                        activeClassName={s["Header-Icon_active"]}>
                        <img src={cartIcon} alt="cart" />
                        <span>{productsInCart.length}</span>
                        {cartOpen ? <CartHover /> : null}
                    </span>
                </li>
            </ul>
            {cartOpen ? (
                <div onClick={() => setCartOpen(false)} className={s["Header-WrappForModal"]}></div>
            ) : null}
        </>
    )
}

const mapStateToProps = (state) => ({
    productsInCart: state.productsInCart,
});

export default connect(mapStateToProps)(HeaderIcons)
