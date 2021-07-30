import axios from "axios";

import { GET_GENERAL_INFO,GENERAL_INFO_ERROR } from './types'

export const getGeneralInfo = () => async dispatch =>{
    try {
        const res= await axios.get('/api/owner/owner');
        dispatch({
            type:GET_GENERAL_INFO,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type:GENERAL_INFO_ERROR,
            payload:{msg:error.response.statusText,status:error.response.status}
        })
    }
}
