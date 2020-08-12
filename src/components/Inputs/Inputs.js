import React from 'react'
import './Inputs.css'

export function TextInput({value, setValue}) {
    return (
        <input className="input" type='text' value={value} onChange={(e) => setValue(e.target.value)}/>
    )
}

export function PasswordInput({value, setValue  }) {
    return (
        <input className="input" type='password' value={value}
        onChange={(e) => setValue(e.target.value)}/>
        
    )
}
