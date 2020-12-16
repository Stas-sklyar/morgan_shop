import React from "react"
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";


import s from "./CartHover.module.scss"



const CartHover = ({ productsInCart }) => {

    return (
        <div className={s["CartHover"]}>
            <div className={s["CartHover-ProductsBody"]}>
                {productsInCart &&
                    productsInCart.map(({ id, categoryId, name, alias, price, image, timeStamp }) => {
                        return (
                            <div key={id} className={s["CartHover-Item"]}>

                                <img className={s["CartHover-Img"]} src={image} alt="poduct" />
                                <div className={s["CartHover-ProductInfo"]}>
                                    <span className={s["CartHover-Name"]}>{name}</span>
                                    <span className={s["CartHover-Price"]}>
                                        <span className={s["CartHover-Amount"]}>1 x </span>
                                        <span>{"£" + price}</span>
                                    </span>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

            <NavLink className={s["CartHover-Link"]} to="/cart">GO TO CHECKOUT</NavLink>
        </div >
    )
}

const mapStateToProps = (state) => ({
    productsInCart: state.productsInCart,
});

export default connect(mapStateToProps)(CartHover)
