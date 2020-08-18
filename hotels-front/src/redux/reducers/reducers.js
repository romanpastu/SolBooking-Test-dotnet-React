const defaultState = {
    hotels: {}
}

const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOAD_HOTELS' : {
            return {
                ...state ,
                hotels: action.hotels,
            };
        }
        default:
            return{
                ...state,
            };
    }
};
export default mainReducer;