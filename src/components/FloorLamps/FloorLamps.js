import React from "react"
import { useGetProducts } from "../../customHooks/useGetProducts";


const FloorLamps = () => {
    let [productsFromHook] = useGetProducts()
    let productsFloorLamps = [];

    productsFromHook && productsFromHook.map((prod) => {
        if (prod.categoryId === "66ef32ef-03ad-48c2-b295-bdfc018b5881") {
            productsFloorLamps.push(prod)
        }
    })

    return (
        <>
            <h1>FloorLampsss</h1>

            { productsFloorLamps &&
                productsFloorLamps.map(({ id, categoryId, name, alias, price, image, timeStamp }) => (
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

export default FloorLamps