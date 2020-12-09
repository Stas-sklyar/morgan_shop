const loadProductsData = (payload) => ({
    type: "LOAD_PRODUCTS_DATA",
    payload,
});

const loadProductsStart = () => ({
    type: "LOAD_PRODUCTS_START",
});

const loadProductsSuccess = () => ({
    type: "LOAD_PRODUCTS_SUCCESS",
});



export const loadProducts = () => {
    return (dispatch) => {
        dispatch(loadProductsStart());
        fetch("https://morgan-shop.herokuapp.com/products")
            .then((res) => res.json())
            .then((products) => {
                dispatch(loadProductsData(products.categories));
                dispatch(loadProductsSuccess());
            })
    };
};