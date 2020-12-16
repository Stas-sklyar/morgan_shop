import React, { useEffect } from "react";
import { useGetCategories } from "../../../customHooks/useGetCategories";

import s from "./Categories.module.scss"

const Categories = () => {
    const host = "https://morgan-shop.herokuapp.com/"

    const [categoriesFromHook] = useGetCategories();

    useEffect(() => {
    }, [categoriesFromHook]);


    return (
        <section className={s.Categories}>
            {categoriesFromHook &&
                categoriesFromHook.map(({ id, title, alias, image, menuOrder }) => (
                    <div key={id} className={s["Categories-ImgBox"]}>
                        <img className={s["Categories-Img"]} src={host + image} alt={title} />
                    </div>
                ))
            }
        </section>
    )
}

export default Categories