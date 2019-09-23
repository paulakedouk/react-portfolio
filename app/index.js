import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './Header'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)