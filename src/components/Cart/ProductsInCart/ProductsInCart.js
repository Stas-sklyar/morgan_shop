import React from "react"
import { connect } from "react-redux";

import s from "../Cart.module.scss"
import Order from "../Order/Order"
import Quantity from "../Quantity/Quantity";

const ProductInCart = ({ productsInCart }) => {
    return (
        <div className={s["Cart-Body"]}>

            <div className={s["Cart-Products"]}>
                {productsInCart &&
                    productsInCart.map(({ id, categoryId, name, alias, price, image, timeStamp }) => {
                        return (
                            <div key={id} className={s["Cart-Product"] + " " + s.ProductInCart}>
                                <img className={s["ProductInCart-Img"]} src={image} alt={name} />

                                <div className={s["ProductInCart-Info"]}>

                                    <div className={s["ProductInCart-Text"]}>
                                        <span className={s["ProductInCart-Name"]}>{name}</span>
                                        <span className={s["ProductInCart-Category"]}>{alias}</span>
                                        <span className={s["ProductInCart-RemoveProductIcon"]}>	&#215;</span>
                                    </div>

                                    <div className={s["ProductInCart-Nav"]}>
                                        <Quantity />
                                        <span>{"£" + price}</span>
                                    </div>

                                </div>

                            </div>
                        )
                    })
                }
            </div>

            <Order />

        </div>
    )
}

const mapStateToProps = (state) => ({
    productsInCart: state.productsInCart,
    amountProductsInCart: state.amountProductsInCart
});

export default connect(mapStateToProps)(ProductInCart)