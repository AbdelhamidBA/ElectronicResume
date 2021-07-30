import React from 'react'
import Certificate from './CVInfo/Certificate'
import Contact from './CVInfo/Contact'
import Education from './CVInfo/Education'
import Experience from './CVInfo/Experience'
import Header from './CVInfo/Header'
import Project from './CVInfo/Project'

const CVInfo = () => {
    return (
        <div className="cv-info">
                <div className="screen-cover"></div>
                <div className="menubar">
                    <i className="fas fa-ellipsis-v" id="toggleinfo"></i>
                </div>
                <Header/>
                <Education/>
                <Experience/>
                <Certificate/>
                <Project/>
                <Contact/>
                <div className="copyright">
                    <p>© 2021 - 2021 Abdelhamid - All Rights Reserved.</p>
                </div>
        </div>
    )
}

export default CVInfo
