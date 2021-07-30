import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
const Experties = ({experties}) => {
    const list = experties.experties
    const exp_list = list.map((elm,index) =>{
        return(
            <li key={index} >
                <div className="experties-info">
                    <p>{elm.title}</p>
                    <p id="exp-percentage">{elm.level}%</p>
                </div>
                <span className="bar"><span className="experties-bar" id={elm.level}></span></span>
            </li>
        )
    })
    return(
    <div className="p-sec" id="experties-data">
        <h3 id="title">Experties</h3>
        <div id="experties">
            <ul>
                {exp_list}
            </ul>
        </div>
    </div>
);
}

Experties.propTypes = {
    experties:PropTypes.object.isRequired,
}
export default Experties