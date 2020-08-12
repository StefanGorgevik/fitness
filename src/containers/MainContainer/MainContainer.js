import React, {useContext} from 'react'
import './MainContainer.css'
import LandingPage from './../LandingPage/LandingPage'
import Main from './../Main/Main';
import {ThemeContext} from '../../contexts/ThemeContext'
import {  Route } from 'react-router-dom'


function MainContainer() {
    const {ui} = useContext(ThemeContext)
    return (
        <div className="main-container" style={{backgroundColor: ui.mainBackground, color: ui.TextColor}}>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/main' component={Main} />
        </div>
    )
}

export default MainContainer
