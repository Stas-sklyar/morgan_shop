import React from "react";
import s from "./Header.module.scss"

import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderIcons from "./HeaderIcons/HeaderIcons";


const Header = () => {

    return (
        <header className={s.Header}>
            <HeaderNav />
            <HeaderIcons />
        </header>

    )
}

export default Header