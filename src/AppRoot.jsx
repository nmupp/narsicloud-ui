import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home.jsx'

const AppRoot = () => {
    return (
        <Router>
            <Route path="/" component={Home}/>
        </Router>
    )
}

export default AppRoot
