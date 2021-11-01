
import "./Login.css";

function LogOut ({handleDisplay}) {

    
    
    function handleNo() {
          localStorage.clear();
          window.location.reload();
      };
    

return (
    <div className="modal">
        <div className="modal_content">
            <div>
            <h1 style={{color:'#d1d0d0'}}>Log Out</h1>

            <div style={{color:'#d1d0d0'}}>¿Desea Guardar El Usuario Para Futuras Consultas?</div>
            <div>
                <button className ="button">
                SI
                </button>
                <button className="button" onClick={handleNo}>
                NO
                </button>
            </div>
            </div>
        </div>
    </div>
);

}

export default LogOut