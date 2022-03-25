import React from 'react'
import useToken from './Hooks/useToken'
import './UnauthenticatedApp.scss'

import twitterLogo from './Assets/Images/twitter-logo-4.png'

function UnauthenticatedApp() {
    const [setIsLoggedIn] = useToken(true)

    const handleSubmit = async (evt) => {
        evt.preventDefault()

        const { email, password } = evt.target.elements

        const res = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                email: email.value.trim(),
                password: password.value.trim(),
            }),
        })

        const data = await res.json()

        if (data?.token) {
            setIsLoggedIn(data?.token)
        }
    }

    return (
        <section className="unauthentication-app">
            <div className="container">
                <div className="unauth-box">
                    <a className="unauth__main-link" href="#">
                        <img
                            className="unauth__image"
                            src={twitterLogo}
                            alt="Twitter logo"
                            width="40"
                            height="33"
                        />
                    </a>
                    <h1 className="unauth-heading">Log in to Twitter</h1>
                    <form className="unauth-form" onSubmit={handleSubmit}>
                        <div>
                            <input
                                className="unauth-input"
                                type="email"
                                name="email"
                                placeholder="Phone number, email address"
                                defaultValue="eve.holt@reqres.in"
                            />
                        </div>

                        <div>
                            <input
                                className="unauth-input"
                                type="password"
                                name="password"
                                placeholder="password"
                                defaultValue="cityslicka"
                            />
                        </div>

                        <button className="unauth-button" type="submit">
                            Log In
                        </button>
                    </form>

                    <div className="unauth-links">
                        <div>
                            <a className="unauth-link" href="#">
                                Forgot password?
                            </a>
                        </div>

                        <div>
                            <a className="unauth-link" href="#">
                                Sign up to Twitter
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UnauthenticatedApp
