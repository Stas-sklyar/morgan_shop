import React, { useEffect } from "react";
import {
    NavLink,
} from "react-router-dom";
import s from "../Header.module.scss"


import logo from "../../../img/header/logo.png"

import { useGetCategories } from "../../../customHooks/useGetCategories"

const HeaderNav = () => {

    const [categoriesFromHook] = useGetCategories();

    useEffect(() => {
    }, [categoriesFromHook]);

    return (
        <nav className={s["Header-Nav"]}>
            <ul className={s["Header-Menu"]}>
                <li className={s["Header-Item"]}>
                    <NavLink to="/">
                        <img src={logo} alt="logo" />
                    </NavLink>
                </li>
                {categoriesFromHook &&
                    categoriesFromHook.map(({ id, title, alias, image, menuOrder }) => (
                        <li key={id} className={s["Header-Item"]}>
                            <NavLink to={'/' + alias}>{title}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default HeaderNav