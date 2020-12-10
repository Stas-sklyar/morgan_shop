import React from "react"

import SortProducts from "../SortProducts/SortProducts"
import Categories from "./Categories/Categories"
import Products from "./Products/Products"

const Home = () => {
    return (
        <>
            <Categories />
            <SortProducts />
            <Products />
        </>
    )
}

export default Home