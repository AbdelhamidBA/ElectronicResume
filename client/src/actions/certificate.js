import axios from "axios";

import {GET_CERTIFICATE,CERTIFICATE_ERROR} from './types'

export const getCertificate = () => async dispatch =>{
    try {
        const res = await axios.get('/api/certificate/certificate')
        dispatch({
            type:GET_CERTIFICATE,
            payload:res.data
        });
    } catch (error) {
        dispatch({
            type:CERTIFICATE_ERROR,
            payload:{msg:error.response.statusText,status:error.response.status}
        });
    }
}

