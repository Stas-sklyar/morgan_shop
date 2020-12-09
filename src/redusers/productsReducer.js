
const initialState = {
    categories: [
        {
            "id": "f95e6ae1-a4bd-44d5-917d-7015f6cdd592",
            "title": "Table lamps",
            "alias": "table-lamps",
            "image": "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
            "menuOrder": "3"
        },
        {
            "id": "66ef32ef-03ad-48c2-b295-bdfc018b5881",
            "title": "Floor lamps",
            "alias": "floor-lamps",
            "image": "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
            "menuOrder": "1"
        },
    ]
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_PRODUCTS_DATA":
            return { ...state, categories: action.payload };

        case "LOAD_PRODUCTS_START":
            return { ...state, isLoading: true };

        case "LOAD_PRODUCTS_SUCCESS":
            return { ...state, isLoading: false };
        default:
            return state;
    }
};
