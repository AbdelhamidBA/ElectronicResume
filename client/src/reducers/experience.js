import {GET_EXPERIENCE, EXPERIENCE_ERROR} from "../actions/types";



const initialState = {
    experience:{},
    error:{},
    loading:true
};

export default function(state=initialState,action){
    const {type,payload} = action
    switch (type){
        case GET_EXPERIENCE:
            return ({
                ...state,
                experience:payload,
                loading:false
            })
        case EXPERIENCE_ERROR:
            return({
                ...state,
                error:payload,
                loading:true
            });
        default:
            return(state)
    }
}