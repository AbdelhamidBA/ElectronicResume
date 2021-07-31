import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getExperience } from '../../actions/experience'

const Experience = ({ getExperience, experience, loading, error }) => {
    const [exp_bool, setExpBool] = useState(false)
    useEffect(() => {
        if (exp_bool === false) {
            getExperience()
            setExpBool(true)
        } else {
            setTimeout(() => {
                getExperience()
            }, 5000)
        }
    }, [experience])
    let experiences = ""
    if (!loading && experience != {}) {
        experiences = experience.data.map((ex, index) => ( <
            div key = { index }
            className = "experience" >
            <
            h3 > { ex.experience_title } < /h3> <
            p id = "workplace" > { ex.experience_role } < /p> <
            p id = "exp-date" > { ex.start_period } - { ex.end_period } < /p> <
            /div>
        ))
    }

    return ( <
        div className = "cv-section"
        id = "experience-info" >
        <
        h3 > Experiences < /h3> <
        div id = "exp-section" > { experiences } <
        /div> <
        /div>
    )
}
Experience.propTypes = {
    getExperience: PropTypes.func.isRequired,
    experience: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    experience: state.experience.experience,
    loading: state.experience.loading,
    error: state.experience.error
})
export default connect(mapStateToProps, { getExperience })(Experience)