import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../common/Button/Button';
import Logo from '../../../common/logo/Logo';
import './login.css'
const Login = () => {

    const [toggle, setToggle] = useState(false);
    let navigate = useNavigate()

    const hangleLogin = () => {
        navigate("/dashboard", { replace: true });
    }

    return (
        <div className="loginBody">
            <div className="loginPageCard">
                <div className="logoDiv">
                    <Logo />
                </div>
                {
                    toggle ? <form action="">
                        <div>
                            <label htmlFor="">Name:</label><br />
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Email/Phone:</label><br />
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Password:</label><br />
                            <input type="Password" />
                        </div>
                        <Button style={{ width: "100%" }} text="Sign Up" />
                    </form> :
                        <form action="">
                            <div>
                                <label htmlFor="">Email/Phone:</label><br />
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Password:</label><br />
                                <input type="Password" />
                            </div>
                            <Button  hangleLogin={hangleLogin}  style={{ width: "100%" }} text="Login" />
                        </form>
                }

                <div className="toggleBox">
                    {
                        toggle ?
                            <p>Already have an account?<span onClick={() => setToggle(prev => !prev)}> Sign In</span></p> :
                            <p>Dont't have an account?<span onClick={() => setToggle(prev => !prev)}> Sign Up</span></p>
                    }
                </div>

            </div>

        </div>
    );
};

export default Login;