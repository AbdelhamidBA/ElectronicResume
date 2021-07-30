import React from 'react'
import userPic from '../../images/userpic1.jpg'
import axios from 'axios'
const Credentials = () => {
    
    return(
    <div className="credentials">
        <i className="fas fa-times fa-lg" id="closeInfo"></i>
        <div id="picture"><img src={userPic} alt="" id="userpic" /></div>
        <p id="username">Abdelhamid Ben Abdelfettah</p>
        <p id="speciality">Software Engineer</p>
        <p id="currentjob">Game Developer</p>
    </div>
);
}
export default Credentials