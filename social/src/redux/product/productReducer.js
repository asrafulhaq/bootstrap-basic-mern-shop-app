import { GET_ALL_PRODUCT } from "./actionTypes.js";
import initialState from "./initialState.js";



// create reducer 
const productReducer = ( state = initialState , { type , payload  } ) => {

    switch (type) {
        case GET_ALL_PRODUCT:
            return {
                ...state, 
                products : payload
            }
            
    
        default:
           return state;
    }

}


export default productReducer;