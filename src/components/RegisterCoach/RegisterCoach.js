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
            <TextInput value={username} setValue={setUsername} />
            <TextInput value={username} setValue={setFullName} />
            <TextInput value={username} setValue={setEmail} />
            <PasswordInput value={password} setValue={setPassword} />
            <SubmitButton click={submitUserHandler} text="Register" name='button submit-button' />
        </div>
    )
}

export default RegisterCoach
