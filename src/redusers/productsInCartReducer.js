
const initialState = [
]


export const productsInCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT_IN_CART":
            return [...state, action.payload]

        case "REMOVE_PRODUCT_IN_CART":
            let targetIndex = state.findIndex((prod) => prod.id === action.id)
            let copyState = state
            copyState.splice(targetIndex, 1)
            return copyState

        default:
            return state
    }
};
