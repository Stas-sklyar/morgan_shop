import React, { useEffect, useState } from "react"
import { connect, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"

import s from "./Order.module.scss"

const Order = ({ productsInCart }) => {
    useDispatch()
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalPrice(() => {
            let tempPrice = 0;
            let priceDelivery = 10;
            productsInCart.map((prod) => tempPrice += parseInt(prod.price))
            return tempPrice + priceDelivery
        })
    }, [productsInCart])

    return (
        <div className={s.Order}>
            <span className={s["Order-Title"]}>Order Summary</span>

            {productsInCart &&
                productsInCart.map(({ id, categoryId, name, alias, price, image, timeStamp }) => {
                    return (<div key={id} className={s["Order-Item"]}>
                        <span>{name}</span>
                        <span>{"£" + price}</span>
                    </div>
                    )
                })
            }

            <div className={s["Order-Delivery"]}>
                <span>Express Delivery </span>
                <span>£10.00</span>
            </div>

            <div className={s["Order-Total"]}>
                <span>Estimated Total</span>
                <span className={s["Order-TotalPrice"]}>£{totalPrice}</span>
            </div>

            <NavLink className={s["Order-Link"]} to="/" >checkout</NavLink>

        </div>
    )
}

const mapStateToProps = (state) => ({
    productsInCart: state.productsInCart,
});

export default connect(mapStateToProps)(Order)