export const changeMethodSort = (payload) => ({
    type: "CHANGE_METHOD_SORT",
    payload,
})

let amountProducts = 0;
export const addProduct = () => ({
    type: "ADD_PRODUCT",
    payload: ++amountProducts,
})

export const deleteProduct = () => ({
    type: "DELETE_PRODUCT",
    payload: --amountProducts,
})

export const deleteAllProductsInCart = () => ({
    type: "DELETE_ALL_PRODUCT",
})

export const addProductInCart = (product) => ({
    type: "ADD_PRODUCT_IN_CART",
    payload: { ...product },
})

export const removeProductInCart = (id) => ({
    type: "REMOVE_PRODUCT_IN_CART",
    id,
})

export const removeAllProductInCart = () => ({
    type: "REMOVE_ALL_PRODUCT_IN_CART",
})


export const handleFormChangeLogin = (formData) => ({
    type: "LOGIN_HANDLE_FORM_CHANGE",
    payload: formData,
});


export const handleFormChangeResetPassword = (value) => ({
    type: "RESET_PASSWORD_HANDLE_FORM_CHANGE",
    payload: value,
});