import React from 'react'
import Credentials from './Credentials'
import Language from './Personal/Language'
import Experties from './Personal/Experties'
import Knowledge from './Personal/Knowledge'
import DownloadCV from './Personal/DownloadCV'
import Socials from './Personal/Socials'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
const PersonalInfo = ({general_info}) => {
    return(
        <div className="personal-info">
            <Language languages={general_info.data[0]} />
            <Experties experties={general_info.data[0]}/>
            <Knowledge knowledges={general_info.data[0]}/>
            <DownloadCV link={general_info.data[0]}/>
        </div>

)};

PersonalInfo.propTypes = {
    general_info:PropTypes.object.isRequired,
}

export default PersonalInfo