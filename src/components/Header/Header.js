import React from "react";
import s from "./Header.module.scss"

import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderIcons from "./HeaderIcons/HeaderIcons";

import logo from "../../img/header/logo.png"
import burgerIcon from "../../img/header/burger-icon.svg"


const Header = () => {

    return (
        <header className={s.Header}>
            <div className={s["Header-Burger"]}>
                <img src={burgerIcon} alt="burger" />
            </div>
            <div className={s["Header-Logo"]}>
                <img src={logo} alt="logo" />
            </div>
            <HeaderNav />
            <HeaderIcons />
        </header>

    )
}

export default Header