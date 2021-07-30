import axios from "axios";

import { GET_PROJECT,PROJECT_ERROR } from './types'

export const getProject = () => async dispatch =>{
    try {
        const res= await axios.get('/api/project/project');
        dispatch({
            type:GET_PROJECT,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type:PROJECT_ERROR,
            payload:{msg:error.response.statusText,status:error.response.status}
        })
    }
}
