import React from "react"
import { useGetProducts } from "../../customHooks/useGetProducts";


const ExteriorCeiling = () => {
    let [productsFromHook] = useGetProducts()
    let productsExteriorCeiling = [];

    productsFromHook && productsFromHook.map((prod) => {
        if (prod.categoryId === "f6e7591c-6743-432d-992b-c3bff746848d") {
            productsExteriorCeiling.push(prod)
        }
    })

    return (
        <>
            <h1>FloorLampsss</h1>

            { productsExteriorCeiling &&
                productsExteriorCeiling.map(({ id, categoryId, name, alias, price, image, timeStamp }) => (
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

export default ExteriorCeiling