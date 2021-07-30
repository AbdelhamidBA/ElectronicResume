import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const Language = ({languages}) => {
    const list = languages.languages
    const list_lang = list.map((language,index) => (
        <div key={index} className="circular-progress">
            <div className="percent">
                <svg>
                    <circle id="0" cx="30" cy="30" r="30"></circle>
                    <circle id="70" cx="30" cy="30" r="30"></circle>
                </svg>
                <div className="percent-number">
                    <h2 id="perc-val">{language.level}%</h2>
                </div>
            </div>
            <h2 id="circle-title">{language.language}</h2>
        </div>
    ))
    return(
    <div className="p-sec" id="languages-data">
        <h3 id="title">Languages</h3>
        <div id="languages">
        {list_lang}
        </div>
    </div>
);
}
Language.propTypes = {
    languages:PropTypes.object.isRequired,
}

export default Language