import React, {useState, useEffect} from 'react'
import './SignInForm.css'
import {TextInput, PasswordInput} from '../Inputs/Inputs'
import { SubmitButton } from '../Buttons/Buttons'

function SignInForm({role}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [margin, setMargin] = useState('0px')

    const submitUserHandler = () => {
        console.log(username, password)
    }

    useEffect(() => {
        if(role) {
                setMargin('-150px')
        }
    }, [role])

    return (
        <div className="sign-in-form" style={{marginTop: margin}}>
            <h1>Sign In</h1>
            <TextInput value={username} setValue={setUsername}/>
            <PasswordInput value={password} setValue={setPassword} />
            <SubmitButton click={submitUserHandler} text="Sign In" name='button submit-button' />

        </div>
    )
}

export default SignInForm
