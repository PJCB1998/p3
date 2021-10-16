import { useState } from 'react';
import axios from 'axios';
import LoginSpecial from './LoginSpecial';
import LoginHelp from './LoginHelp';
import Register from './Register';
import { Link } from 'react-router-dom';

function LoginForm(props) {

    return (
        <div>
            
            <div className ="wrapper">
                <div className="form">
                    <h1 className="title">PHILA</h1>
                    <h1 className="title">You are important</h1>
                    <div align="center">

                        <Link to='/loginHelp' >
                        <button className="button">
                            <span>Get Help</span>
                        </button>
                        </Link>

                        <Link to='/loginSpecial' >
                        <button className="button" >
                            <span>Login as Specialist</span>
                        </button>
                        </Link>
                        <Link to='/signIn' >
                        <button className="button" >
                            <span>Sign In</span>
                        </button>
                        </Link>
                    </div>
                </div>
                
                            
            </div>


        </div>

    );

}
export default LoginForm;