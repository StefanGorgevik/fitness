import React, { useState, useEffect, useContext } from 'react'
import './LandingPage.css'
// import {Link} from 'react-router-dom'

import Header from '../../components/MainHeader/MainHeader'
import SignInForm from '../../components/SignInForm/SignInForm'
import RegisterCoach from '../../components/RegisterCoach/RegisterCoach'
import { SubmitButton } from '../../components/Buttons/Buttons'
import { ThemeContext } from '../../contexts/ThemeContext'
import { ChooseAuthTitle } from '../../components/Titles/Titles'


function LandingPage() {
    const {ui} = useContext(ThemeContext)

    const [roleChosen, setRoleChosen] = useState(false)
    const [role, setRole] = useState(null)
    const [content, setContent] = useState(null)
    const [form, setForm] = useState(null)

    const chooseRoleHandler = (role) => {
        setRoleChosen(true)
        if (role === 'coach') {
            setRole('coach')
        } else if (role === 'trainee') {
            setRole('trainee')
        }
    }

    const chooseAuthHandler = (auth) => {
        setForm(auth)
    }

    useEffect(() => {
        if (form === 'sign-in') {
            setContent(<SignInForm role={role} setForm={setForm} />)
        } else if (form === 'register') {
            setContent(<RegisterCoach role={role} setForm={setForm} />)
        }
    }, [form, role])

    return (
        <div className="landing-page">
            <Header />
            <div className="choose-role-div" style={{ marginTop: roleChosen ? '-150px' : null }}>
                <SubmitButton active={role === 'coach' && true} name="button choose-button" click={() => chooseRoleHandler('coach')} text="Coach" />
                <SubmitButton active={role === 'trainee' && true} name="button choose-button" click={() => chooseRoleHandler('trainee')} text="Trainee" />
            </div>

            <div className="auth-div">
                {role !== null &&
                    <div className="choose-auth-div" style={{ marginTop: roleChosen ? '-250px' : null, marginLeft: form && '-50px' }}>
                    <ChooseAuthTitle active={form === 'sign-in' ? true : false} click={() => chooseAuthHandler('sign-in')} text='Sign In' role={role}/>
                    <ChooseAuthTitle active={form === 'register' ? true : false} click={() => chooseAuthHandler('register')} text='Register' role={role}/>
                    </div>}


                {content}
            </div>
        </div>
    )
}

export default LandingPage
