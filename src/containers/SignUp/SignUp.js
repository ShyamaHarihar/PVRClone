import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './style.css';
const styleobj = { background: " rgba(3, 0, 0, 0.89)", border: "2px solid white", borderRadius: "20px", color: "white" }
const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <div className="form-style">
                <form className="ui form">
                    <div className="ui two column centered grid signup-style">Sign up</div>
                    <div className="ui two column centered grid">
                        <div className="column">
                            <div className='field'>
                                <label className="labelstyle">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="fullname"
                                    style={styleobj}
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="ui two column centered grid">
                        <div className="column">
                            <div className="field">
                                <label className="labelstyle">Email</label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    style={styleobj}
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="ui two column centered grid">
                        <div className="column">
                            <div className="field">
                                <label className="labelstyle">Mobile</label>
                                <input
                                    type="text"
                                    placeholder="mobile"
                                    style={styleobj}
                                    value={mobile}
                                    onChange={e => setMobile(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="ui two column centered grid">
                        <div className="column">
                            <div className="field labelstyle">
                                <label className="labelstyle">Password</label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    style={styleobj}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="ui two column centered grid">
                        <div className="column">
                            <button className="btn custom-button">Create Account</button>
                        </div>
                    </div>
                    <div className="ui two column centered grid">
                        <div className="column">
                            <label>Aldready have an account?</label>
                            <Link to='login' style={{ color: "#FFF", fontWeight: "bolder" }}> &nbsp;&nbsp;Log in</Link>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default SignUp;
