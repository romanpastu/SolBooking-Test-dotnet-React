const defaultState = {
    hotels: {},
    hotel: {}
}

const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOAD_HOTELS' : {
            return {
                ...state ,
                hotels: action.hotels,
            };
        }
        case 'LOAD_HOTEL' : {
            return{
                ...state,
                hotel: action.hotel,
            }
        }
        default:
            return{
                ...state,
            };
    }
};
export default mainReducer;