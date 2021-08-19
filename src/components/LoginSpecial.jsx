import { useState } from 'react';
import Popup from 'reactjs-popup';
import axios from 'axios';


function LoginSpecial() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {

    }

    return (
        
                <div className="wrapper">
                    <div className="form">
                        <h1 className="title">Specialist</h1>
                        <form onSubmit={handleSubmit}>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required></input>
                            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required></input>
                            <div align="center">
                                <button type="submit" className="button">
                                    <span>Go</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
      


    );

}

export default LoginSpecial;