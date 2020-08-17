import React, {useContext} from 'react'
import './Label.css'
import { ThemeContext } from '../../contexts/ThemeContext'

function Label({id, text}) {
    const {ui} = useContext(ThemeContext)
    return (
        <label className="label" text={text} style={{color: ui.textColor}} htmlFor={id}>{text}</label>
    )
}

export default Label
