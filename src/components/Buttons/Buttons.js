import React, { useContext } from 'react'
import './Buttons.css'
import { ThemeContext } from '../../contexts/ThemeContext'

export function SubmitButton({active, click, bool, text, name}) {
    const {ui } = useContext(ThemeContext)

    return (
        <button style={{backgroundColor: ui.buttonBackground ,color: ui.textColor, fontWeight: active && 900, border: active && `2px solid ${ui.textColor}`}}
        className={name} onClick={() => click(bool)}>{text}</button>
    )
}   

export function ThemeButton({active, click, bool, text, name}) {
    const {ui } = useContext(ThemeContext)
    return (
        <button style={{backgroundColor: ui.buttonBackground ,color: ui.textColor, fontWeight: active && 900, border: active && `2px solid ${ui.textColor}`}}
        className={name} onClick={() => click(bool)}>{text}</button>
    )
}

// import React, { useContext } from 'react'
// import './Buttons.css'
// import { ThemeContext } from '../../contexts/ThemeContext'

// export function SubmitButton({click, bool, text, name}) {
//     const {ui } = useContext(ThemeContext)

//     return (
//         <button style={{backgroundColor: ui.mainBackground ,color: ui.textColor}}
//         className={name} onClick={() => click(bool)}>{text}</button>
//     )
// }   

// export function ThemeButton({click, bool, text, name}) {
//     const {ui } = useContext(ThemeContext)
//     return (
//         <button style={{backgroundColor: ui.mainBackground ,color: ui.textColor}}
//         className={name} onClick={() => click(bool)}>{text}</button>
//     )
// }