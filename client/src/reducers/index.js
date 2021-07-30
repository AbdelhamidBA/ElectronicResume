import { combineReducers } from "redux";
import infoReducer from './infoReducer'
import education from './education'
import experience from './experience'
import certificate from './certificate'
import project from './project'

export default combineReducers({
    infoReducer,
    education,
    experience,
    certificate,
    project
})