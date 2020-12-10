import React from "react"

import s from "../../Products.module.scss"

import { useGetProducts } from "../../../customHooks/useGetProducts"

import addProductIcon from "../../../img/products/add-product-icon.png"

const Products = () => {


    const [productsFromHook] = useGetProducts();


    return (
        <div className={s.Products}>
            {productsFromHook &&
                productsFromHook.map(({ id, categoryId, name, alias, price, image, timeStamp }) => (
                    <div key={id} className={s["Products-Product"] + " " + s.Product}>
                        <img className={s["Product-Img"]} src={image} alt={name} />
                        <span className={s["Product-Name"]}>{alias}</span>
                        <span className={s["Product-Price"]}>{"£" + price}</span>
                        <img className={s["Product-AddProductIcon"]} src={addProductIcon} alt="add product" />
                    </div>
                ))
            }
        </div>
    )
}


export default Products;



