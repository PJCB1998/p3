import { useState } from 'react';
import axios from 'axios';
import LoginSpecial from './LoginSpecial';

function LoginForm() {
    const [showLoginSpecial, setShowLoginSpecial] = useState(false);

    function handleHelp() {


    }

    function handleSpecial() {

        setShowLoginSpecial(true);

    }

    return (
        <div>
            
            <div className="wrapper">
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
                {showLoginSpecial && <LoginSpecial></LoginSpecial>}
                            
            </div>

            

        </div>




    );

}
export default LoginForm;