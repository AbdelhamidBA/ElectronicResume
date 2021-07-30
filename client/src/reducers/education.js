import {GET_EDUCATION, EDUCATION_ERROR} from "../actions/types";



const initialState = {
    education:{},
    error:{},
    loading:true
};

export default function(state=initialState,action){
    const {type,payload} = action
    switch (type){
        case GET_EDUCATION:
            return ({
                ...state,
                education:payload,
                loading:false
            })
        case EDUCATION_ERROR:
            return({
                ...state,
                error:payload,
                loading:true
            });
        default:
            return(state)
    }
}