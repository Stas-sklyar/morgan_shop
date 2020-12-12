import React from "react"
import { connect } from "react-redux";

import EmptyCart from "./EmptyCart/EmptyCart"

import s from "./Cart.module.scss"

import ProductsInCart from "./ProductsInCart/ProductsInCart";

const Cart = ({ amountProductsInCart }) => {


    return (
        <div className={s.Cart}>
            <h1 className={s["Cart-Title"]}>basket</h1>

            {amountProductsInCart
                ? <ProductsInCart />
                : <EmptyCart />
            }

        </div >
    )
}

const mapStateToProps = (state) => ({
    amountProductsInCart: state.amountProductsInCart
});

export default connect(mapStateToProps)(Cart)