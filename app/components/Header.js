import React, { Component } from 'react'
import ArrowImage from '../img/arrow.svg';
import SVG from 'react-inlinesvg';
import "animate.css/animate.min.css";

export default class Header extends Component {
    render() {

        return (
            <div>
                <div className="bcg">
                    <div className="wrapper">
                        <h1 className="header-h1">anapaula.io</h1>
                        <h2 className="header-h2">Developer & Designer</h2>
                    </div>
                    <p className="header-p">Let's build something great together!</p>
                    <div className="scroll-down">
                        <SVG src={ArrowImage} />
                    </div>
                </div>
            </div>
        )
    }
}
