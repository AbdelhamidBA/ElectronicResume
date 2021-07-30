import {GET_CERTIFICATE, CERTIFICATE_ERROR} from "../actions/types";



const initialState = {
    certificate:{},
    error:{},
    loading:true
};

export default function(state=initialState,action){
    const {type,payload} = action
    switch (type){
        case GET_CERTIFICATE:
            return ({
                ...state,
                certificate:payload,
                loading:false
            })
        case CERTIFICATE_ERROR:
            return({
                ...state,
                error:payload,
                loading:true
            });
        default:
            return(state)
    }
}