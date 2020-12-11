import React from "react"
import { useDispatch } from "react-redux";

import s from "./SortProducts.module.scss"

import { changeMethodSort } from "../../actions/actions"

const SortProducts = () => {
    const dispatch = useDispatch();

    const handSelectChange = (e) => {
        const target = e.target;
        const value = target.value;

        dispatch(changeMethodSort({ value }));
    };

    return (
        <div className={s.Sort}>
            <span className={s["Sort-Title"]}>Sort by:</span>
            <select onChange={handSelectChange} className={s["Sort-Select"]}>
                <option value={"hightToLow"} className={s["Sort-Option"]}>Price hight to low</option>
                <option value={"lowToHight"} className={s["Sort-Option"]}>Price low to hight</option>
                <option value={"sortNewness"} className={s["Sort-Option"]}>Newness</option>
            </select>
        </div>
    )
}

export default SortProducts