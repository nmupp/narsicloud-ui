import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home'

const RootComponent = () => {
    return (
        <Router>
            <Route path="/" component={Home}/>
        </Router>
    )
}

export default RootComponent
