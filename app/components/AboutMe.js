import React, { Component } from 'react'
import MyImage from '../img/me.jpg'

export default class componentName extends Component {
    render() {
        return (
            <>
                <div className="about-me">
                    <img className="my-image rellax" data-rellax-speed="-1" src={MyImage} alt="me" />
                    <h1 className="rellax" data-rellax-speed="-1">Ana Paula Kedouk</h1>
                    <p className="rellax" data-rellax-speed="-1"> Focused software engineer, designer, and entrepreneur, driven by challenges, with soft skills to lead and work with cross-functional teams in technology and innovation projects. Led a small team of designers and developers, won 3 national startup contests and built a community of 1500+ customers, all in one year. Passionate designer with a big eye for details, creative and good teammate. Co-instructor of a Design Thinking program, leveraging tools to build empathy and find customer needs. Loves to travel, experience new cultures, to always learn and never give up</p>
                    <button className="btn rellax" data-rellax-speed="-1">Download my resume</button>
                </div>
            </>
        )
    }
}
