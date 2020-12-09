import React, { useEffect } from "react";

import {
    NavLink,
} from "react-router-dom";

import { useGetCategories } from "../../customHooks/useGetCategories"


const Header = () => {

    const [categoriesFromHook] = useGetCategories();

    useEffect(() => {
    }, [categoriesFromHook]);

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    {categoriesFromHook &&
                        categoriesFromHook.map(({ id, title, alias, image, menuOrder }) => (
                            <li key={id}>
                                <NavLink to={'/' + alias}>{title}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <hr></hr>
        </header>

    )
}

export default Header