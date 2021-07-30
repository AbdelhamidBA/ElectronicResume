import {GET_GENERAL_INFO, GENERAL_INFO_ERROR} from "../actions/types";



const initialState = {
    general_info:{},
    error:{},
    loading:true
};

export default function(state=initialState,action){
    const {type,payload} = action
    switch (type){
        case GET_GENERAL_INFO:
            return ({
                ...state,
                general_info:payload,
                loading:false
            })
        case GENERAL_INFO_ERROR:
            return({
                ...state,
                error:payload,
                loading:true
            });
        default:
            return(state)
    }
}