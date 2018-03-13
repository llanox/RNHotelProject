import { combineReducers } from 'redux';
 
import { HOTEL_DETAIL_AVAILABLE } from "../Actions/FetchHotelDetailsByIdAction" //Import the actions types constant we defined in our actions
import { HOTEL_LIST_AVAILABLE } from "../Actions/FetchHotelsAction" //Import the actions types constant we defined in our actions

let dataState = { data: [], details: Object, loading:true, loadingDetails:true };
 
const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case HOTEL_LIST_AVAILABLE:
            state = Object.assign({}, state, { data: action.data, loading:false });
            return state;
        case HOTEL_DETAIL_AVAILABLE:
            state = Object.assign({}, state, { details: action.details, loadingDetails:false });
            return state;
        default:
            return state;
    }
};
 
// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})
 
export default rootReducer;