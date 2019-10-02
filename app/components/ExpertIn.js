import React, { Component } from 'react'
import CodeIcon from '../img/code.svg'
import DesignIcon from '../img/design.svg'
import WebIcon from '../img/webdesign.svg'

export default class ExpertIn extends Component {
    render() {
        return (
            <>
                <div className="topic reset-margin">
                    <h3>Expert <b>in</b></h3>

                    <div className="expert-areas">
                        <div className="expert-area">
                            <img className="expert-icon" src={CodeIcon} alt="Paula" width="50px" />
                            <h2 className="reset-margin">Code</h2>
                            <p>Creating web applications for desktop and mobile, focused on speed, responsiveness and performance.</p>
                        </div>
                        <div className="expert-area">
                            <img className="expert-icon" src={DesignIcon} alt="Paula" width="50px" />
                            <h2 className="reset-margin">Design</h2>
                            <p>Building empathy, creating functional and beautiful experiences targeting user needs and business goals.</p>
                        </div>
                        <div className="expert-area">
                            <img className="expert-icon" src={WebIcon} alt="Paula" width="50px" />
                            <h2 className="reset-margin">Web Design</h2>
                            <p>Creating responsive user interfaces with optimized assets for all types of screen resolution.</p>
                        </div>
                    </div>
                
                </div>
            </>
        )
    }
}
