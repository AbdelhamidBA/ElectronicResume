import axios from "axios";
import { GET_EXPERIENCE,EXPERIENCE_ERROR } from "./types";

export const getExperience = () => async dispatch =>{
    try {
        const res = await axios.get('/api/experience/experience')
        dispatch({
            type:GET_EXPERIENCE,
            payload:res.data
        });
    } catch (error) {
        dispatch({
            type:EXPERIENCE_ERROR,
            payload:{msg:error.response.statusText,status:error.response.status}
        });
    }
}

