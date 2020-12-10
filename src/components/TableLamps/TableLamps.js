import React from "react";

import s from "../Products.module.scss"
import { useGetProducts } from "../../customHooks/useGetProducts";

import addProductIcon from "../../img/products/add-product-icon.png"

import SortProducts from "../SortProducts/SortProducts"


const TableLamps = () => {

    let [productsFromHook] = useGetProducts()

    return (
        <>
            <SortProducts />
            <div className={s.Products}>
                {productsFromHook &&
                    productsFromHook.filter((product => product.categoryId === "f95e6ae1-a4bd-44d5-917d-7015f6cdd592"))
                        .map(({ id, categoryId, name, alias, price, image, timeStamp }) => (
                            <div key={id} className={s["Products-Product"] + " " + s.Product}>
                                <img className={s["Product-Img"]} src={image} alt={name} />
                                <span className={s["Product-Name"]}>{alias}</span>
                                <span className={s["Product-Price"]}>{"£" + price}</span>
                                <img className={s["Product-AddProductIcon"]} src={addProductIcon} alt="add product" />
                            </div>
                        ))
                }
            </div>
        </>
    )
}

export default TableLamps