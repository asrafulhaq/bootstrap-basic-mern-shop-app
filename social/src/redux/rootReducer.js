import { combineReducers } from 'redux';
import productReducer from './product/productReducer.js';


// combine reducer 
const rootReducer = combineReducers({
    products : productReducer
});

// export reducer 
export default rootReducer;