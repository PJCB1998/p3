import { useState } from 'react';
import axios from 'axios';
import LoginSpecial from './LoginSpecial';
import LoginHelp from './LoginHelp';
import Register from './Register';

function LoginForm(props) {
    const [showLoginSpecial, setShowLoginSpecial] = useState(false);
    const [showLoginHelp, setShowLoginHelp] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    function handleHelp() {
        setShowLoginHelp(true)
    }

    function handleSpecial() {
        setShowLoginSpecial(true);
    }

    function handleRegister() {
        setShowRegister(true);
    }

    function handleDisplay(){
        console.log('in display')
        setShowLoginHelp(false)
        setShowLoginSpecial(false)
        setShowRegister(false)
    }

    return (
        <div>
            
            <div className ="wrapper">
                <div className="form">
                    <h1 className="title">PHILA</h1>
                    <h1 className="title">You are important</h1>
                    <div align="center">

                        <button className="button" onClick={handleHelp}>
                            <span>Get Help</span>
                        </button>
                        <button className="button" onClick={handleSpecial}>
                            <span>Login as Specialist</span>
                        </button>
                        <button className="button" onClick={handleRegister}>
                            <span>Sign In</span>
                        </button>
                        <button className="button" >
                            <span>Learn about mental health</span>
                        </button>

                    </div>
                </div>
                
                            
            </div>

            {showLoginSpecial && <LoginSpecial handleDisplay={handleDisplay}/>}
            {showLoginHelp && <LoginHelp handleDisplay={handleDisplay}/>}
            {showRegister && <Register handleDisplay={handleDisplay}/>}

        </div>

    );

}
export default LoginForm;