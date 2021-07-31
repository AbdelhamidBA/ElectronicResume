import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import $ from 'jquery'
const Language = ({languages}) => {
    
    const list = languages.languages
    const list_lang = list.map((language,index) => (
        <div key={index} className="circular-progress">
            <div className="percent">
                <svg>
                    <circle id="0" cx="30" cy="30" r="30"></circle>
                    <circle id={language.level} cx="30" cy="30" r="30"></circle>
                </svg>
                <div className="percent-number">
                    <h2 id="perc-val">{language.level}%</h2>
                </div>
            </div>
            <h2 id="circle-title">{language.language}</h2>
        </div>
    ))
    useEffect(() => {
        $("circle").each(function() {
            var percent = this.id;
            console.log(percent)
            if (percent == 0) {
                $(this).css("stroke-dashoffset", "0")
            } else {
                $(this).css("stroke-dashoffset", "calc(190 - (190 * " + percent + ") / 100)")
            }
    
        });
    }, [])
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