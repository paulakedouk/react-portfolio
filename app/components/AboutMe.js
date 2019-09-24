import React, { Component } from 'react'
// import Me from '../img/me.jpg';


export default class AboutMe extends Component {
    render() {
        return (
            <div className="about-me">
                <div id="cb01" className="about">
                    <div className="wrapper topic">
                        <header className="title">
                            <h3>About <b>me</b></h3>
                            <div className="bottom-line"></div>
                        </header>
                    </div>
                    <div className="about-area">
                        <div className="about-img"></div>
                        <h2>Paula Kedouk</h2>
                        <p>Focused software engineer, designer, and entrepreneur, driven by challenges, with soft skills to lead and work with cross-functional teams in technology and innovation projects. Led a small team of designers and developers, won 3 national startup contests and built a community of 1500+ customers, all in one year. Passionate designer with a big eye for details, creative and good teammate. Co-instructor of a Design Thinking program, leveraging tools to build empathy and find customer needs. Loves to travel, experience new cultures, to always learn and never give up.</p>
                        <div>
                            <div id="download-cv" className="button button-pink">Download my resume</div>
                            <div id="hire-me" className="button button-gray">Hire me</div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
