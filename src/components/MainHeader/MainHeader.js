import React, { useContext } from 'react'
import './MainHeader.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { ThemeButton } from '../Buttons/Buttons'

function MainHeader() {
    const { ui, changeThemeAction, state } = useContext(ThemeContext)


    return (
        <div className='main-header'>
            <h1 className='header-title' style={{ color: ui.textColor }}>Fitness</h1>
            <div className="choose-theme">
                <ThemeButton active={state.theme === 'dark' && true} text="Dark" click={changeThemeAction} bool={'dark'} name='button theme-button' />
                <ThemeButton active={state.theme === 'light' && true} text="Light" click={changeThemeAction} bool={'light'} name='button theme-button' />
            </div>
        </div>
    )
}

export default MainHeader
