import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getProject } from '../../actions/project'
import $ from 'jquery'
const Project = ({ getProject, project, loading, error }) => {
    const [projBool, setProjBool] = useState(false)
    useEffect(() => {
        if (projBool === false) {
            getProject()
            setProjBool(true)
        } else {
            setTimeout(() => {
                getProject()
            }, 5000)
        }


        $("[id^=viewimg]").on("click", function() {
            var parent = $(this).parent().parent()
            var imgtoview = parent.children("#projimg").attr("src")
            var previewer = $(".img-previewer")
            previewer.css("display", "flex")
            $("#imgprev").attr("src", imgtoview)
            $("#closePreviewer").on("click", function() {
                previewer.css("display", "none")
            });
        });
    }, [project])



    let projects = ""

    loading === false && project !== {} && (
        projects = project.data.map((proj, index) => {
            return ( 
            <div key = { index }className = "image" >
                <img src = { `uploads/${proj.project_img}` }id = "projimg" / >
                <div className = "image-info" >
                    <i className = "fas fa-expand fa-lg zlatan"id = "viewimg" > </i> 
                    <p> { proj.project_desc } </p> 
                    </div> 
                </div>
            )
        })
    )


    return ( 
        <div className = "cv-section"id = "gallery-info" >
            <h3> Projects </h3> 
            <div id = "gallery-section" > { projects } </div> 
            </div>
    )
}
Project.propTypes = {
    getProject: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    project: state.project.project,
    loading: state.project.loading,
    error: state.project.error
})
export default connect(mapStateToProps, { getProject })(Project)