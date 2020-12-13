import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import s from "../Products.module.scss"

import { useGetProducts } from "../../customHooks/useGetProducts";

import addProductIcon from "../../img/products/add-product-icon.png"
import removeProductIcon from "../../img/products/remove-product-with-cart.png"

import SortProducts from "../SortProducts/SortProducts"
import { addProduct, addProductInCart, deleteProduct, removeProductInCart } from "../../actions/actions";

import CartHover from "../CartHover/CartHover"

const InteriorCeiling = ({ targetSort, productsInCart }) => {

    const dispatch = useDispatch();

    const addProductToCart = (e) => {
        dispatch(addProduct());
        let targetProduct = productsFromHook.find((prod) => prod.id === e.target.id)
        dispatch(addProductInCart(targetProduct));
    }

    const removeProductWithCart = (e) => {
        dispatch(deleteProduct());
        dispatch(removeProductInCart(e.target.id))
    }

    const [methodSort, setMethodSort] = useState("")

    let [productsFromHook] = useGetProducts();

    if (productsFromHook !== undefined) {
        productsFromHook.sort((a, b) => b.price - a.price)
    }

    if (productsFromHook) {
        if (methodSort === "hightToLow") productsFromHook.sort((a, b) => b.price - a.price)
        else if (methodSort === "lowToHight") productsFromHook.sort((a, b) => a.price - b.price)
        else if (methodSort === "sortNewness") productsFromHook.sort((a, b) => {
            return new Date(a.timeStamp) - new Date(b.timeStamp)
        })
    }

    useEffect(() => {
        setMethodSort(targetSort.value)
        return () => {
            setMethodSort("")
        }
    }, [targetSort.value])

    // cart
    const prodInCart = (id) => (
        productsInCart.find((prod) => id === prod.id)
    )

    return (
        <>
            <CartHover />
            <SortProducts />
            <div className={s.Products}>
                {productsFromHook &&
                    productsFromHook.filter((product => product.categoryId === "dc4437c1-364b-4ba5-992a-15f55ca2d8eb"))
                        .map(({ id, categoryId, name, alias, price, image, timeStamp }, index, array) => {
                            return (
                                <div key={id} className={s["Products-Product"] + " " + s.Product}>
                                    <img className={s["Product-Img"]} src={image} alt={name} />
                                    <span className={s["Product-Name"]}>{alias}</span>
                                    <span className={s["Product-Price"]}>{"£" + price}</span>
                                    <img id={id} onClick={(prodInCart(id)) ? removeProductWithCart : addProductToCart} className={s["Product-AddProductIcon"]}
                                        src={(prodInCart(id)) ? removeProductIcon : addProductIcon} alt="icon" />
                                </div>
                            )
                        })
                }
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    targetSort: state.sortMethod.methodSort,
    productsInCart: state.productsInCart,
});

export default connect(mapStateToProps)(InteriorCeiling)
