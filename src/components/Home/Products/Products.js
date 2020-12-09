
import React from "react";

import { useGetProducts } from "../../../customHooks/useGetProducts"

const Products = () => {


    const [productsFromHook] = useGetProducts();


    return (
        <>
            <h3>products</h3>

            { productsFromHook &&
                productsFromHook.map(({ id, categoryId, name, alias, price, image, timeStamp }) => (
                    <div key={id}>
                        <div>{alias}</div>
                        <div>{price}</div>
                        <img src={image} alt={name} />
                        <hr></hr>
                    </div>
                ))
            }
        </>
    )
}


export default Products;



