import React from "react"

import plusIcon from "../../../img/cart/plus-icon.svg"
import minusIcon from "../../../img/cart/minus-icon.svg"


import s from "./Quantity.module.scss"

const Quantity = () => {
    return (
        <div className={s.Quantity}>
            <img className={s["Quantity-Icon"]} src={minusIcon} alt="minus" />
            <input className={s["Quantity-Input"]} type="number" />
            <img className={s["Quantity-Icon"]} src={plusIcon} alt="plus" />
        </div>
    )
}


export default Quantity