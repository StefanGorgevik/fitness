import React, {useContext} from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

export function FormsTitle({text}) {
    const {ui} = useContext(ThemeContext)
    return (
        <h1 style={{color: ui.textColor}}>{text}</h1>
    )
}

