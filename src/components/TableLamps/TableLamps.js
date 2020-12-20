import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useDispatch } from "react-redux"

import s from "../Products.module.scss"

import { useGetProducts } from "../../customHooks/useGetProducts"

import addProductIcon from "../../img/products/add-product-icon.png"
import removeProductIcon from "../../img/products/remove-product-with-cart.png"

import SortProducts from "../SortProducts/SortProducts"
import { addProductInCart, removeProductInCart } from "../../actions/actions"

const TableLamps = ({ targetSort, productsInCart }) => {
    const host = "https://morgan-shop.herokuapp.com/"
    const dispatch = useDispatch()


    // interaction with cart
    const addProductToCart = (e) => {
        let targetProduct = productsFromHook.find((prod) => prod.id === e.target.id)
        dispatch(addProductInCart(targetProduct))
    }

    const removeProductWithCart = (e) => {
        dispatch(removeProductInCart(e.target.id))
    }

    const prodInCart = (id) => (
        productsInCart.find((prod) => id === prod.id)
    )
    // interaction with cart


    // set method sort
    const [methodSort, setMethodSort] = useState("")

    let [productsFromHook] = useGetProducts()

    if (productsFromHook) {
        if (methodSort === "hightToLow") productsFromHook.sort((a, b) => b.price - a.price)
        else if (methodSort === "lowToHight") productsFromHook.sort((a, b) => a.price - b.price)
        else if (methodSort === "sortNewness") productsFromHook.sort((a, b) => {
            return new Date(a.timeStamp) - new Date(b.timeStamp)
        })
    }

    useEffect(() => {
        setMethodSort(targetSort)
        return () => {
            setMethodSort("")
        }
    }, [targetSort])
    // set method sort


    return (
        <>
            <SortProducts />
            <div className={s.Products}>
                {productsFromHook &&
                    productsFromHook.filter((product => product.categoryId === "f95e6ae1-a4bd-44d5-917d-7015f6cdd592"))
                        .map(({ id, categoryId, name, alias, price, image, timeStamp }, index, array) => {
                            return (
                                <div key={id} className={s["Products-Product"] + " " + s.Product}>
                                    <img className={s["Product-Img"]} src={host + image} alt={name} />
                                    <span className={s["Product-Name"]}>{alias}</span>
                                    <span className={s["Product-Price"]}>{"£" + price + ".00"}</span>
                                    <img id={id} onClick={(prodInCart(id)) ? removeProductWithCart : addProductToCart}
                                        className={s["Product-AddProductIcon"]}
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

export default connect(mapStateToProps)(TableLamps)