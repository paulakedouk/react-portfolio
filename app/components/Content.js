import React, { Component } from 'react'

import AboutMe from './AboutMe'
import ExpertIn from './ExpertIn';
import MyExperience from './MyExperience';


export default class Content extends Component {
    render() {
        return (
            <>
                <AboutMe />
                <ExpertIn />
                <MyExperience />
            </>
        )
    }
}
