import React, { Component, useEffect } from 'react'
import Header from './Header'
import Content from './Content';
import * as Rellax from 'rellax/rellax'

import SVG from 'react-inlinesvg';
import "../animate.css";
import ScrollAnimation from 'react-animate-on-scroll';

const App = () => {
    useEffect(() => {
        window.rellax = new Rellax('.rellax')
    }, [])
    return (
        <>
            <Header />
            <Content />
        </>
    )
}

export default App;

