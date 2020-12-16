
export const amountProductInCartReducer = (state = 0, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return action.payload

        case "DELETE_PRODUCT":
            return action.payload

        case "DELETE_ALL_PRODUCT":
            return 0

        default:
            return state
    }
};
