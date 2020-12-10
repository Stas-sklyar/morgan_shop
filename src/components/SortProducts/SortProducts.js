import React from "react"

import s from "./SortProducts.module.scss"

const SortProducts = () => {
    return (
        <div className={s.Sort}>
            <span className={s["Sort-Title"]}>Sort by:</span>
            <select className={s["Sort-Select"]}>
                <option className={s["Sort-Option"]}>Price hight to low</option>
                <option className={s["Sort-Option"]}>Price low to hight</option>
                <option className={s["Sort-Option"]}>Newness</option>
            </select>
        </div>
    )
}

export default SortProducts