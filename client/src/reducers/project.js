import {GET_PROJECT, PROJECT_ERROR} from "../actions/types";



const initialState = {
    project:{},
    error:{},
    loading:true
};

export default function(state=initialState,action){
    const {type,payload} = action
    switch (type){
        case GET_PROJECT:
            return ({
                ...state,
                project:payload,
                loading:false
            })
        case PROJECT_ERROR:
            return({
                ...state,
                error:payload,
                loading:true
            });
        default:
            return(state)
    }
}