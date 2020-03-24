import React, { useContext } from 'react'
import LoginForm from '../components/LoginForm'
import { BrowserRouter, Route } from 'react-router-dom'
import AuthNavbar from '../components/AuthNavbar'
import SignupForm from '../components/SignupForm'
import BgImg from '../img/nightsky_wallpaper.jpg'
import { UserContext } from '../contexts/UserContext'

export default function Landing() {
    const style = {
        authLanding: {
            width: "100vw",
            height: "100vh",
            display: "grid",
            margin: "0",
            padding: "0 2rem",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${BgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }
    }

    const { user } = useContext(UserContext);

    return (
        <div style={style.authLanding}>
            <AuthNavbar />
            <BrowserRouter>
                <Route exact path="/" component={LoginForm} />
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/signup" component={SignupForm} />
            </BrowserRouter>
        </div>
    )
}
