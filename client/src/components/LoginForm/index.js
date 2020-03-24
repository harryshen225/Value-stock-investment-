import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import useProfileImg from '../../img/undraw_profile.svg';
import { Link } from 'react-router-dom';

export default function LoginForm() {
    const loginContainer = useRef();

    const [cardState, setCardState] = useState('card-hidden');
    const [userFocus, setUserFocus] = useState('');
    const [pwdFocus, setPwdFocus] = useState('');

    useEffect(() => {
        setCardState('');
    }, [])

    const handleVendorLogin = vendor=>{
        window.open(`http://localhost:3001/auth/${vendor}`,'_self');
    }

    return (
        <div className="login-page">
            <div ref={loginContainer} className={`login-container ${cardState}`}>
                <form action="">
                    <img className="avatar" src={useProfileImg} alt="avatar" />
                    <h2>Welcome</h2>

                    <div className="social-media-box">
                        <ul>
                            <li><a href="#" onClick={()=>handleVendorLogin('facebook')}><i className="fab fa-facebook"></i></a></li>
                            <li><a href="#" onClick={()=>handleVendorLogin('google')}><i className="fab fa-google"></i></a></li>
                            <li><a href="#" onClick={()=>handleVendorLogin('linkedin')}><i className="fab fa-linkedin"></i></a></li>
                            <li><a href="#" onClick={()=>handleVendorLogin('twitter')}><i className="fab fa-twitter"></i></a></li>
                        </ul>
                    </div>

                    <div className={`input-div one ${userFocus}`}>
                        <div className="i">
                            <i className="fas fa-user"></i>
                        </div>
                        <div>
                            <h5>Username</h5>
                            <input type="text" className="input" onFocus={() => setUserFocus("focus")}
                                onBlur={event => event.target.value == "" ? setUserFocus("") : setUserFocus('focus')} required />
                        </div>

                    </div>
                    <div className={`input-div two ${pwdFocus}`}>
                        <div className="i">
                            <i className="fas fa-lock"></i>
                        </div>
                        <div>
                            <h5>Password</h5>
                            <input type="password" className="input" onFocus={() => setPwdFocus("focus")}
                                onBlur={event => event.target.value == "" ? setPwdFocus("") : setPwdFocus('focus')} required />
                        </div>

                    </div>
                    <a href="#" id="forgot-password">Forgot Password?</a>
                    <input type="submit" className="login-btn" value="Login" />
                </form>
            </div>
        </div>
    )
}
