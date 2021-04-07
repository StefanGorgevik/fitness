import React, {useState, useEffect, useContext} from 'react'
import './SignInForm.css'
import {TextInput, PasswordInput} from '../Inputs/Inputs'
import { SubmitButton } from '../Buttons/Buttons'
import {FormsTitle} from '../Titles/Titles'
import {MainContext} from '../../contexts/MainContext'

function SignInForm({role}) {
    const { state, signIn } = useContext(MainContext);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [margin, setMargin] = useState('0px')

    useEffect(() => {
        if(role) {
                setMargin('-150px')
        }
    }, [role])

    return (
        <div className="sign-in-form" style={{marginTop: margin}}>
            <FormsTitle text='Sign In'/>
            <TextInput id='username' text='Username' value={username} setValue={setUsername}/>
            <PasswordInput id="password" text='Password' value={password} setValue={setPassword} />
            <SubmitButton click={() => signIn(username, password)} text="Sign In" name='button submit-button' />
        </div>
    )
}

export default SignInForm
