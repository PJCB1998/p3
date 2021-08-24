import { useState } from 'react';
import "./LoginSpecial.css";
import axios from 'axios';


function LoginSpecial() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject= { 'Project-ID':"1db65471-ab4a-4d9f-8a77-4ff550fd067b",'User-Name':username,'User-Secret':password};

        try {
           await axios.get('https://api.chatengine.io/chats',{ headers: authObject});

           localStorage.setItem('username',username);
           localStorage.setItem('password', password);

           window.location.reload(); 
        } 
        
        catch(error){
            setError('Incorrect Credientials')
        }
    }

    return (

        <div className="modal">
            <div className="modal_content">
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
                        <h2 className="error">
                            {error}
                        </h2>
                    </form>
                </div>
            </div>

        </div>



    );

}

export default LoginSpecial;