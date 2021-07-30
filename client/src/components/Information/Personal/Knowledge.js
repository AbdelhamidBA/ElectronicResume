import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const Knowledge = ({knowledges}) =>{
    const item= knowledges.knowledges
    const knowlegde_list = item.map((elm,index)=>{
        return(
            <li key={index}><i className="fas fa-check fa-sm"></i>{elm}</li>
        )
    })
    return(
    <div className="p-sec" id="knowledge-data">
        <h3 id="title">Knowledge</h3>
        <div id="knowledge">
            <ul>
               {knowlegde_list}
            </ul>
        </div>
    </div>
);
}
Knowledge.propTypes = {
    knowledges: PropTypes.object.isRequired,
}
export default Knowledge