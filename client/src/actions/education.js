import axios from "axios";

import {GET_EDUCATION,EDUCATION_ERROR} from './types'

export const getEducation = () => async dispatch =>{
    try {
        const res = await axios.get('/api/education/education')
        dispatch({
            type:GET_EDUCATION,
            payload:res.data
        });
    } catch (error) {
        dispatch({
            type:EDUCATION_ERROR,
            payload:{msg:error.response.statusText,status:error.response.status}
        });
    }
}

