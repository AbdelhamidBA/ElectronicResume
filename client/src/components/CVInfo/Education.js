import React, { useEffect,useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {getEducation} from '../../actions/education'



const Education = ({getEducation,education,loading,error}) => {
            
    const [edu_bool, setEduBool] = useState(false)
   
    useEffect(()=>{
        if(edu_bool === false){
            getEducation()
            setEduBool(true)
        } 
        else
        {
            setTimeout(() => {
                getEducation()
              }, 5000);
        }
        
    },[education])

   

    let educations = ""
    if(!loading && education != {}){
        educations = education.data.map((ed,index) =>(
            <div key={index} className="education">
                <h3>{ed.degree}</h3>
                <p id="university">{ed.university}</p>
                <p id="edu-date">{ed.start_year} {ed.end_year !== "" && "-"+ ed.end_year}</p>
            </div>
        ))
    }
   

    return (
        <div className="cv-section" id="education-info">
            <h3>Education</h3>
            <div id="edu-section">
                {educations}
            </div>
        </div>
    )
}

Education.propTypes = {
    getEducation:PropTypes.func.isRequired,
    education:PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    education:state.education.education,
    loading:state.education.loading,
    error:state.education.error
})

export default connect(mapStateToProps,{getEducation})(Education)
