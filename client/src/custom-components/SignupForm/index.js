
import './style.css';
import React, { useEffect, useRef, useState } from 'react';
import useProfileImg from '../../img/undraw_profile.svg';
import { useForm } from "react-hook-form";

export default function SignupForm() {
    const [cardState, setCardState] = useState('card-hidden');
    const [userFocus, setUserFocus] = useState('');
    const [fnFocus, setFnFocus] = useState('');
    const [lnFocus, setLnFocus] = useState('');
    const [pwdFocus, setPwdFocus] = useState('');
    const [pwdConfirmFocus, setPwdConfirmFocus] = useState('');
    const { register, getValues, handleSubmit, errors} = useForm();

    useEffect(() => {
        setCardState('');
    }, [])

    const handleVendorLogin = vendor=>{
        window.open(`https://localhost:3001/auth/${vendor}`,'_self');
    }

    const onSubmit = ()=>{

    }

    return (
        <div>
            <div className="signup-page">
                <div className={`signup-container ${cardState}`}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <img className="avatar" src={useProfileImg} alt="avatar" />
                        <h2>Sign up</h2>

                        <div className="social-media-box">
                            <ul>
                                <li><a href="#" onClick={() => handleVendorLogin('facebook')}><i className="fab fa-facebook"></i></a></li>
                                <li><a href="#" onClick={() => handleVendorLogin('google')}><i className="fab fa-google"></i></a></li>
                                <li><a href="#" onClick={() => handleVendorLogin('linkedin')}><i className="fab fa-linkedin"></i></a></li>
                                <li><a href="#" onClick={() => handleVendorLogin('twitter')}><i className="fab fa-twitter"></i></a></li>
                            </ul>
                        </div>

                        <div className={`input-div one ${userFocus}`}>
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>Email</h5>
                                <input name="email" ref={register} type="text" className="input" onFocus={() => setUserFocus("focus")}
                                    onBlur={event => event.target.value == "" ? setUserFocus("") : setUserFocus('focus')} required />
                            </div>
                        </div>

                        <div className={`input-div two ${fnFocus}`}>
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>First Name</h5>
                                <input name="firstName" ref={register} type="text" className="input" onFocus={() => setFnFocus("focus")}
                                    onBlur={event => event.target.value == "" ? setFnFocus("") : setFnFocus('focus')} required />
                            </div>
                        </div>

                        <div className={`input-div three ${lnFocus}`}>
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>Last Name</h5>
                                <input name="lastName" ref={register} type="text" className="input" onFocus={() => setLnFocus("focus")}
                                    onBlur={event => event.target.value == "" ? setLnFocus("") : setLnFocus('focus')} required />
                            </div>
                        </div>
                        <div className={`input-div four ${pwdFocus}`}>
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div>
                                <h5>Password</h5>
                                <input name="password" ref={register({
                                    minLength: {
                                        value: 8,
                                        message: 'Password length should be at least 8 characters long'
                                    }
                                })} type="password" className="input" onFocus={() => setPwdFocus("focus")}
                                    onBlur={event => event.target.value == "" ? setPwdFocus("") : setPwdFocus('focus')} required />
                                
                            </div>
                        </div>
                        {errors.password && <p className="warnings">{errors.password.message}</p>} 
                        <div className={`input-div five ${pwdConfirmFocus}`}>
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div>
                                <h5>Confirm Password</h5>
                                <input name="passwordRepeat" ref={register({
                                    validate: value => value === getValues().password || "Passwords don't match"
                                })} type="password" className="input" onFocus={() => setPwdConfirmFocus("focus")}
                                    onBlur={event => event.target.value == "" ? setPwdConfirmFocus("") : setPwdConfirmFocus('focus')} required />
                            </div>
    
                        </div>
                        {errors.passwordRepeat && <p className="warnings">{errors.passwordRepeat.message}</p>} 
                        <a href="#" id="TnC">Terms and Conditions</a>
                        <input type="submit" className="signup-btn" value="Sign UP" onSubmit={handleSubmit}/>
                    </form>
                </div>
            </div>
        </div>
    )
} 
