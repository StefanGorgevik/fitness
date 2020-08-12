import React from 'react'
import './Buttons.css'

export function SubmitButton({click, bool, text, name}) {
    return (
        <button className={name} onClick={() => click(bool)}>{text}</button>
    )
}

export function ThemeButton({click, bool, text, name}) {
    return (
        <button className={name} onClick={() => click(bool)}>{text}</button>
    )
}