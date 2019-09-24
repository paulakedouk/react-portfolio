import React, { Component } from 'react'
import Header from './Header'
import AboutMe from './AboutMe';

import SVG from 'react-inlinesvg';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <ScrollAnimation animateIn="fadeIn">
                    <AboutMe />
                </ScrollAnimation>

            </div>
        )
    }
}

