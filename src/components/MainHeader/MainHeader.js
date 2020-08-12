import React, { useContext } from 'react'
import './MainHeader.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { ThemeButton } from '../Buttons/Buttons'

function MainHeader() {
    const { ui, changeThemeAction } = useContext(ThemeContext)

    return (
        <div className='main-header'>
            <h1 className='header-title' style={{ color: ui.textColor }}>Fitness</h1>
            <div className="choose-theme">
                <ThemeButton text="Dark" click={changeThemeAction} bool={true} name='button theme-button' />
                <ThemeButton text="Light" click={changeThemeAction} bool={false} name='button theme-button' />
            </div>
        </div>
    )
}

export default MainHeader
