export const changeMethodSort = (payload) => ({
    type: "CHANGE_METHOD_SORT",
    payload,
})

export const addProduct = (payload) => ({
    type: "ADD_PRODUCT",
    payload,
})

export const deleteProduct = (payload) => ({
    type: "DELETE_PRODUCT",
    payload,
})

export const addProductInCart = (product) => ({
    type: "ADD_PRODUCT_IN_CART",
    payload: { ...product },
})

export const removeProductInCart = (id) => ({
    type: "REMOVE_PRODUCT_IN_CART",
    id,
})