import React from "react";
import { useGetProducts } from "../../customHooks/useGetProducts";

const TableLamps = () => {

    let [productsFromHook] = useGetProducts()
    let productsTableLamps = [];

    productsFromHook && productsFromHook.map((prod) => {
        if (prod.categoryId === "f95e6ae1-a4bd-44d5-917d-7015f6cdd592") {
            productsTableLamps.push(prod)
        }
    })

    return (
        <>
            <h1>TableLampsss</h1>

            { productsTableLamps &&
                productsTableLamps.map(({ id, categoryId, name, alias, price, image, timeStamp }) => (
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

export default TableLamps