import { GET_ALL_PRODUCT } from "./actionTypes"


// get all products 
export const getAllProduct = (payload) => {

    return {
        type : GET_ALL_PRODUCT,
        payload : payload
    }

}