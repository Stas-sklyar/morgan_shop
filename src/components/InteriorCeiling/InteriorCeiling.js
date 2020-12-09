import React from "react"
import { useGetProducts } from "../../customHooks/useGetProducts";


const InteriorCeiling = () => {
    let [productsFromHook] = useGetProducts()
    let productsInteriorCeiling = [];

    productsFromHook && productsFromHook.map((prod) => {
        if (prod.categoryId === "dc4437c1-364b-4ba5-992a-15f55ca2d8eb") {
            productsInteriorCeiling.push(prod)
        }
    })

    return (
        <>
            <h1>InteriorCeilinggg</h1>

            { productsInteriorCeiling &&
                productsInteriorCeiling.map(({ id, categoryId, name, alias, price, image, timeStamp }) => (
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

export default InteriorCeiling
