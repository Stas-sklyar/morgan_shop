import React from "react"

import EmptyCart from "./EmptyCart/EmptyCart"

import s from "./Cart.module.scss"

const Cart = () => {
    return (
        <div className={s.Cart}>
            <h1 className={s["Cart-Title"]}>basket</h1>
            <EmptyCart />
        </div>
    )
}

export default Cart