import { useState } from 'react';
import axios from 'axios';
import LoginSpecial from './LoginSpecial';
import LoginHelp from './LoginHelp';

function LoginForm() {
    const [showLoginSpecial, setShowLoginSpecial] = useState(false);
    const [showLoginHelp, setShowLoginHelp] = useState(false);

    function handleHelp() {
        setShowLoginHelp(true)
    }

    function handleSpecial() {
        setShowLoginSpecial(true);
    }

    function handleDisplay(){
        console.log('in display')
        setShowLoginHelp(false)
        setShowLoginSpecial(false)
    }

    return (
        <div>
            
            <div className ="wrapper">
                <div className="form">
                    <h1 className="title">P3</h1>
                    <div align="center">

                        <buton className="button" onClick={handleHelp}>
                            <span>Get Help</span>
                        </buton>
                        <button className="button" onClick={handleSpecial}>
                            <span>Login as Specialist</span>
                            
                        </button>
                    </div>
                </div>
                
                            
            </div>

            {showLoginSpecial && <LoginSpecial handleDisplay={handleDisplay}/>}
            {showLoginHelp && <LoginHelp handleDisplay={handleDisplay}/>}

        </div>




    );

}
export default LoginForm;