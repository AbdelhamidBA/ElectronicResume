import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
const DownloadCV = ({link}) => (
    <div className="p-sec" id="download-cv">
        <span id="cv-download"><a key={'0'} href={link.cv_link}>DOWNLOAD RESUME <i className="fas fa-download"></i></a></span>
    </div>
);

DownloadCV.propTypes = {
    link : PropTypes.object.isRequired,
}
export default DownloadCV