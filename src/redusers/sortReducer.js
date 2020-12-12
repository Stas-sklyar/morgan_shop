
const initialState = {
    methodSort: ""
}

export const sortReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_METHOD_SORT":
            return { methodSort: action.payload };

        default:
            return state;
    }
};
