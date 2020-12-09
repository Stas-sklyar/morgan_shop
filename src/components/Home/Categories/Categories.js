import React, { useEffect } from "react";
import { useGetCategories } from "../../../customHooks/useGetCategories";

const Categories = () => {

    const [categoriesFromHook] = useGetCategories();

    useEffect(() => {
    }, [categoriesFromHook]);


    return (
        <section>
            {categoriesFromHook &&
                categoriesFromHook.map(({ id, title, alias, image, menuOrder }) => (
                    <img key={id} style={{ margin: "10px" }} src={image} alt={title} />
                ))
            }
        </section>
    )
}

export default Categories