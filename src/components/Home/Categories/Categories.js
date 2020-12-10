import React, { useEffect } from "react";
import { useGetCategories } from "../../../customHooks/useGetCategories";

import s from "./Categories.module.scss"

const Categories = () => {

    const [categoriesFromHook] = useGetCategories();

    useEffect(() => {
    }, [categoriesFromHook]);


    return (
        <section className={s.Categories}>
            {categoriesFromHook &&
                categoriesFromHook.map(({ id, title, alias, image, menuOrder }) => (
                    <div key={id} className={s["Categories-ImgBox"]}>
                        <img className={s["Categories-Img"]} src={"image"} alt={title} />
                    </div>
                ))
            }
        </section>
    )
}

export default Categories