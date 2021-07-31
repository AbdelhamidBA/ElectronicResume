import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux';
import PersonalInfo from '../components/Information/PersonalInfo'
import Credentials from './Information/Credentials';
import Socials from './Information/Personal/Socials'
import PropTypes from 'prop-types'
import { getGeneralInfo } from '../actions/profile';
import $ from 'jquery'

const GeneralInfo = ({getGeneralInfo,general_info,error,loading}) => {
    const [info_bool, setInfoBool] = useState(false)
    
    useEffect(() => {
        if(info_bool === false) {
            getGeneralInfo()
            setInfoBool(true)
        }
        else
        {
            setTimeout(()=>{
                getGeneralInfo()
            },5000)
        }

        $(document).ready(function() {
            $("circle").each(function() {
                var percent = this.id;
                if (percent == 0) {
                    $(this).css("stroke-dashoffset", "0")
                } else {
                    $(this).css("stroke-dashoffset", "calc(190 - (190 * " + percent + ") / 100)")
                }
        
            });
        
            $("#experties ul li").each(function() {
        
                var expertiseinfo = $(this).children(".experties-info")
                var mainbar = $(this).children(".bar")
                var bar = mainbar.children(".experties-bar")
                var percentage = expertiseinfo.children("#exp-percentage").html()
                bar.animate({
                    width: percentage
                }, 2500)
            });
        
            $("[id^=viewimg]").on("click", function() {
                console.log("HELOOLLOLO")
                var parent = $(this).parent().parent()
                var imgtoview = parent.children("#projimg").attr("src")
                var previewer = $(".img-previewer")
                previewer.css("display", "flex")
                $("#imgprev").attr("src", imgtoview)
                $("#closePreviewer").on("click", function() {
                    previewer.css("display", "none")
                });
            });
        
            $("#toggleinfo").on("click", function() {
        
                $(".generalinfo").css("display", "flex")
                $(".generalinfo").animate({
                    left: '0'
                }, 1000)
                $(".screen-cover").css("display", "block")
                $(".screen-cover").animate({
                    opacity: "1"
                }, 1000)
            });
        
            $("#closeInfo").on("click", function() {
                $(".screen-cover").animate({
                    opacity: "0"
                }, 1000, function() {
                    $(".screen-cover").css("display", "none")
                });
                $(".generalinfo").animate({
                    left: '-290px'
                }, 1000, function() {
                    $(".generalinfo").css("display", "none")
                });
            });
        });
    },[general_info])
  
    return (loading == false && general_info != {} ? 
    <div className="generalinfo">
        <Credentials/>
        <PersonalInfo general_info={general_info}/>
        <Socials/>
    </div> : <div></div>
    );
}

GeneralInfo.propTypes = {
    getGeneralInfo:PropTypes.func.isRequired,
    general_info:PropTypes.object.isRequired,
    loading:PropTypes.bool,
    error:PropTypes.object,
}

GeneralInfo.defaultProps = {
    general_info:{}
}

const mapStateToProps = state =>({
    general_info: state.infoReducer.general_info,
    loading:state.infoReducer.loading,
    error:state.infoReducer.error
})

export default connect(mapStateToProps,{getGeneralInfo})(GeneralInfo)
