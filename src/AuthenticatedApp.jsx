import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import Lists from './Pages/Lists/Lists'

function AuthenticatedApp() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/profile" element={<Profile />} />
                <Route path="/lists" element={<Lists />} />
            </Routes>
        </>
    )
}

export default AuthenticatedApp
