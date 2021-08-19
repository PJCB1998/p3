
import './App.css';
import LoginForm from './components/LoginForm';
import { ChatEngine } from 'react-chat-engine';


function App() {
  if(!localStorage.getItem('username')) return <LoginForm></LoginForm>
  return (
            <ChatEngine
                height="100vh"
                projectID="
                1db65471-ab4a-4d9f-8a77-4ff550fd067b"
                userName="Test"
                userSecret="123456"
            />
  );
}

export default App;
