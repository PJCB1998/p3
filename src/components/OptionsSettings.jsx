import LogOut from './LogOut'
import { useState } from "react";

const OptionsSettings = (props) => {

const [showLogOut, setShowLogOut] = useState(false);

function handleLogOut() {
    setShowLogOut(true)
}
function handleDisplay(){
    console.log('in display')
    setShowLogOut(false)
}


return(
<div>
<div style={{margin: 'auto', width:'50%'}}>
    <button className="button" onClick ={handleLogOut}>Log Out</button>
</div>
{showLogOut && <LogOut handleDisplay={handleDisplay}/>}
</div>


);
}

export default OptionsSettings;