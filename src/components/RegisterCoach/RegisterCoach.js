import React,{useState, useEffect} from 'react'
import './RegisterCoach.css'

import {TextInput, PasswordInput} from '../Inputs/Inputs'
import {SubmitButton} from '../Buttons/Buttons'
import { FormsTitle } from '../Titles/Titles'

function RegisterCoach({role}) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')
    const [margin, setMargin] = useState('0px')

    const submitUserHandler = () => {
        console.log(username, password, email, fullName)
    }

    useEffect(() => {
        if (role) {
            setMargin('-150px')
        }
    }, [role])
    return (
        <div className="register-form" style={{ marginTop: margin }}>
            <FormsTitle text='Register' />
            <TextInput text='Fullname' id='fullname' value={fullName} setValue={setFullName} />
            <TextInput text='Username' id='username' value={username} setValue={setUsername} />
            <TextInput text='Email' id='email' value={email} setValue={setEmail} />
            <PasswordInput text='Password' id='password' value={password} setValue={setPassword} />
            <SubmitButton click={submitUserHandler} text="Register" name='button submit-button' />
        </div>
    )
}

export default RegisterCoach
