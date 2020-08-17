import React from 'react'
import './Inputs.css'
import Label from '../Label/Label'

export function TextInput({ value, setValue, id, text }) {
    return (
        <div className="input-div">
            <Label id={id} text={text} />
            <input className="input" type='text' id={id} value={value} onChange={(e) => setValue(e.target.value)} 
            placeholder={`Enter your ${id}`} />
        </div>
    )
}

export function PasswordInput({ value, setValue, id, text }) {
    return (
        <div className="input-div">
            <Label id={id} text={text} />
            <input className="input" type='password' value={value}
                onChange={(e) => setValue(e.target.value)} placeholder="Enter your password"/>
        </div>
    )
}
