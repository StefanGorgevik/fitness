import React, {useContext} from 'react'
import './Titles.css'
import { ThemeContext } from '../../contexts/ThemeContext'

export function FormsTitle({text}) {
    const {ui} = useContext(ThemeContext)
    return (
        <h1 style={{color: ui.textColor}}>{text}</h1>
    )
}

export function ChooseAuthTitle({text, click, auth, role, active}) {
    const {ui} = useContext(ThemeContext)

    return (
        <h1 style={{color: ui.textColor, border: active && '2px solid' + ui.textColor}} className="choose-auth" onClick={click} >{text} as a {role} </h1>
    )
}