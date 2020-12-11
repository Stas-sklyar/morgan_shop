import React, { useEffect, useState } from "react"
import { connect } from "react-redux";

import s from "../Products.module.scss"

import { useGetProducts } from "../../customHooks/useGetProducts";

import addProductIcon from "../../img/products/add-product-icon.png"

import SortProducts from "../SortProducts/SortProducts"

const InteriorCeiling = ({ targetSort }) => {

    const [methodSort, setMethodSort] = useState(targetSort.value)

    useEffect(() => {
        setMethodSort(targetSort.value)
    }, [targetSort.value])

    let [productsFromHook] = useGetProducts();
    productsFromHook && productsFromHook.sort((a, b) => b.price - a.price)
    if (methodSort === "hightToLow") productsFromHook.sort((a, b) => b.price - a.price)
    else if (methodSort === "lowToHight") productsFromHook.sort((a, b) => a.price - b.price)
    else if (methodSort === "sortNewness") productsFromHook.sort((a, b) => {
        let dataA = new Date(a.timeStamp)
        let dataB = new Date(b.timeStamp)
        return dataB - dataA
    })


    return (
        <>
            <SortProducts />
            <div className={s.Products}>
                {productsFromHook &&
                    productsFromHook.filter((product => product.categoryId === "dc4437c1-364b-4ba5-992a-15f55ca2d8eb"))
                        .map(({ id, categoryId, name, alias, price, image, timeStamp }) => (
                            <div key={id} className={s["Products-Product"] + " " + s.Product}>
                                <img className={s["Product-Img"]} src={image} alt={name} />
                                <span className={s["Product-Name"]}>{alias}</span>
                                <span className={s["Product-Price"]}>{"£" + price}</span>
                                <img className={s["Product-AddProductIcon"]} src={addProductIcon} alt="add product" />
                                <span>{timeStamp}</span>
                            </div>
                        ))
                }
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    targetSort: state.sortMethod.methodSort,
});

export default connect(mapStateToProps)(InteriorCeiling)
