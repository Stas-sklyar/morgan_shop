import React, { useEffect, useState } from "react"
import { connect, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { removeAllProductInCart, deleteAllProductsInCart } from "../../../actions/actions"

import s from "./Order.module.scss"

const Order = ({ productsInCart }) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        setTotalPrice(() => {
            let tempPrice = 0;
            let priceDelivery = 10;
            productsInCart.map((prod) => tempPrice += parseInt(prod.price))
            return tempPrice + priceDelivery
        })
    }, [productsInCart])

    const deleteAllProducts = () => {
        dispatch(removeAllProductInCart())
        dispatch(deleteAllProductsInCart())
    }

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

            <NavLink onClick={deleteAllProducts} className={s["Order-Link"]}
                to="/order-successful" >checkout</NavLink>



        </div >
    )
}

const mapStateToProps = (state) => ({
    productsInCart: state.productsInCart,
});

export default connect(mapStateToProps)(Order)