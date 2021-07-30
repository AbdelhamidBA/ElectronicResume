import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getCertificate } from '../../actions/certificate'
import certificate from '../../reducers/certificate'
const Certificate = ({getCertificate,certificate,loading,error}) => {

    useEffect(()=>{
        getCertificate()
    },[])
    
    let certificates = ""
    if(loading === false && certificate !== {})
    {
        certificates= certificate.data.map((cert,index) =>{
            return(
                <div key={index} className="certificat">
                    <h3>{cert.certificate_title}</h3>
                </div>
            )
        })
    }
    return (
        <div className="cv-section" id="certificat-info">
            <h3>Trainings & Certificates</h3>
            <div id="certificat-section">
                {certificates}
            </div>
        </div>
    )
}

Certificate.propTypes = {
    getCertificate : PropTypes.func.isRequired,
    certificate: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    certificate:state.certificate.certificate,
    loading:state.certificate.loading,
    error:state.certificate.error
})

export default connect(mapStateToProps,{getCertificate})(Certificate)
