import {LIST_PRODUCTS} from '../types/productsType'

export const productsReducer = (state={},action)=>{
    switch(action.type){
    case LIST_PRODUCTS :
        return{
            ...state,
          products:action.payload,
        }
    default : return state;
    }
}